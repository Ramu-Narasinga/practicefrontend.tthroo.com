import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../Shared/Header";
import ChapterEditor from "./Editor";
import Steps from './Steps';
import { ChapterType } from './types';
import { getToken } from '../Shared/Utils';
import { SandpackFiles } from '@codesandbox/sandpack-react/types';
import "./index.css";


function Chapter() {
  const { chapterId } = useParams();
  const [chapter, setChapter] = useState<ChapterType>({} as ChapterType);
  const [files, setFiles] = useState<SandpackFiles>({} as SandpackFiles);

  useEffect(() => {
    // Fetch chapter data when the component mounts
    fetch(`${process.env.REACT_APP_API_URL}/chapter/${chapterId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChapter(data);
        setFiles({...data?.additionalfiles, ...data?.userChapter?.files});
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [chapterId]);

  if (Object.keys(chapter).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header title={chapter.title} unit={`${chapter?.unit?.title} / `} unitId={chapter.unitId} />
      <div className='block color-red md:hidden my-2'>*This editor works best on large screens</div>
      <div className="flex flex-row gap-10">
        <div className="w-1/4 flex flex-col gap-6">
          <div className='flex flex-row justify-between items-center pl-6 pt-4'>
            <div><h1 className='pl-2 text-xl'>Steps</h1></div>
            {/* <p><a href="https://react.dev/learn/thinking-in-react">Thinking in react</a> guide is used to write the steps below</p> */}
          </div>
          <div className="sidebar-container overflow-y-scroll">
            {chapter?.steps?.length > 0 && <Steps chapterTitle={chapter?.title} stepTitles={chapter?.steps} />}
          </div>
        </div>
        <div className="pt-4 w-3/4 pr-6">
          {<ChapterEditor files={files && Object.keys(files).length > 0 ? files : {}} />}
        </div>
      </div>
    </>
  );
}

export default Chapter;
