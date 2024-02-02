import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChapterCard from '../ChapterCard';
import { ChapterCardType } from '../types';
import { SkeletonLoader } from './SkeletonLoader';

function UnitChapters(props: {unit: String}) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/chapters?unit=${props.unit}`)
      .then((response) => response.json())
      .then((data) => {
        setChapters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [props.unit]);

  if (loading) {
    return (
      <SkeletonLoader />
    )
  }

  return (
    // <div className="w-3/4 flex flex-col gap-10 mt-4 pl-6 md:pl-0">
    //   <div className="flex flex-row gap-8 flex-wrap">
    //     {chapters.map((chapter: ChapterCardType) => (
    //       <ChapterCard key={chapter.id} chapter={chapter} />
    //     ))}
    //     {
    //       chapters.length === 0 && <div className='text-black text-lg font-normal'>No chapters added yet.</div>
    //     }
    //   </div>
    // </div>
    <div className="flex flex-col gap-10 mt-4 pl-6 md:pl-0">
      <div className="flex flex-row gap-8 flex-wrap  px-4 md:px-8">
        {chapters.map((chapter: ChapterCardType) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
        {
          chapters.length === 0 && <div className='text-black text-lg font-normal'>No chapters added yet.</div>
        }
      </div>
    </div>
  );
}

export default UnitChapters;
