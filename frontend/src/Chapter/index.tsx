import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../Shared/Header";
import ChapterEditor from "./Editor";
import Steps from './Steps';
import { ChapterType } from './types';
import { getToken } from '../Shared/Utils';
import { SandpackFiles } from '@codesandbox/sandpack-react/types';
import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";
import "./index.css";
import Selector from './Steps/Selector';
import { Toaster } from 'react-hot-toast';


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
        setChapter(data.chapter);
        setFiles({...data?.chapter?.additionalfiles, ...data?.files});
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [chapterId]);

  if (Object.keys(chapter).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
      <Header title={chapter.title} unit={`${chapter?.unit?.title} / `} unitId={chapter.unitId} />
      <div className="flex flex-row bg-gray-100">
        <div className="pt-4 w-1/4 sidebar-container overflow-y-scroll">
          {chapter?.steps?.length > 0 && <Steps chapterTitle={chapter?.title} stepTitles={chapter?.steps} />}
        </div>
        <div className="w-3/4 h-full">
          {
            <ChapterEditor files={files && Object.keys(files).length > 0 ? files : {}} />
          }
        </div>
      </div>
    </>
  );
}

export default Chapter;
