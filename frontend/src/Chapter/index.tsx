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
import Button from '../Shared/Button';


function Chapter() {
  const { chapterId } = useParams();
  const [chapter, setChapter] = useState<ChapterType>({} as ChapterType);
  const [files, setFiles] = useState<SandpackFiles>({} as SandpackFiles);
  const [revealSteps, setRevealSteps] = useState(false);

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
        if (data?.userChapters && data?.userChapters[0]) {
          setFiles({...data?.additionalfiles, ...data?.userChapters[0].files});
        }
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
          {revealSteps && chapter?.steps?.length > 0 && <Steps chapterTitle={chapter?.title} stepTitles={chapter?.steps} />}
          {
            !revealSteps && 
            <div className='text-center'>

              <h1 className='text-lg mb-4 underline'>Build the component:</h1>
              <a href={`/assets/components/${chapter.title}/${chapter.title}.fig`} download>
                <img className="w-80 mx-auto my-0 cursor-pointer mb-4" src={`/assets/components/${chapter.title}/img.png`} />
              </a>
              <h1 className='text-lg mb-4 underline'>Set up instructions:</h1>
              <div className='text-left w-80 mx-auto my-0'>
                <p className='mb-2'>
                  1. <a className="text-violet-700 underline cursor-pointer" href={`/assets/components/${chapter.title}/${chapter.title}.fig`} download>Download the figma design file</a> for this component
                </p>
                <p className='mb-2'>
                  2. Login into your Figma account and import this download file
                </p>
                <p className='mb-4'>
                  3. Start building the component. Happy hacking! :)
                </p>
              </div>

              <h1 className='text-lg mb-4 underline'>Stuck or need help?</h1>
              <Button label="Follow tutorial" onClick={() => setRevealSteps(true)} />
            </div>
          }
        </div>
        <div className="w-3/4 h-full">
          {
            // <ChapterEditor files={files && Object.keys(files).length > 0 ? files : {}} />
          }
          <iframe src="https://codesandbox.io/p/devbox/drag-and-drop-profile-cards-d64xgx?embed=1"
            className='w-full h-[calc(100vh-4rem)]'
            title="drag and drop profile cards"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Chapter;
