import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import CollapsibleSidebar from "../../Shared/CollapsibleSidebar";
import classNames from "classnames";
import { CourseType } from '../types';
import { SkeletonLoader } from './SkeletonLoader';

function Sidebar() {
  const [courses, setCourses] = useState<CourseType[]>([] as CourseType[]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { unitId } = useParams();

  const loadFirstItem = (data: CourseType[]) => {

    if (data.length > 0) {
      let firstCourse = data[0];
      if (firstCourse.units.length > 0) {
        let firstUnit = firstCourse.units[0];
        navigate(`/practice/unit/${firstUnit.id}`);
      }
    }
  }

  useEffect(() => {

    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/courses`)
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
        if (unitId) {
          navigate(`/practice/unit/${unitId}`);
        } else {
          loadFirstItem(data);
        }
      })
      .catch(error => console.error(error));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className='w-1/4 pl-6'>
      <SkeletonLoader />
    </div>
  }

  return (
    <div className='w-1/4'>
      {
        courses.map(
          (course: CourseType, index) => (
            <CollapsibleSidebar title={course.title} isOpen={index === 0}>
              <div className="flex flex-row gap-10 md:flex-col md:gap-0">
                <>
                  {
                    course.units.map(unit => (
                      <NavLink
                        key={unit.id}
                        to={`/practice/unit/${unit.id}`}
                        className={({ isActive }) =>
                          classNames("w-full text-black text-sm font-normal pl-2 py-4 block", { "pl-2 border-l-4 border-violet-700 bg-gray-300 bg-opacity-25 rounded-md": isActive })
                        }
                      >
                        {unit.title}
                      </NavLink>
                    ))
                  }
                </>

              </div>
            </CollapsibleSidebar>
          ))}
    </div>
  );
}

export default Sidebar;
