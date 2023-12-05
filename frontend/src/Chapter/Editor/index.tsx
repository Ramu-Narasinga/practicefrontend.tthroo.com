import React, { useEffect, useState } from 'react';
import {
  useSandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackFiles,
} from "@codesandbox/sandpack-react";
import { getToken } from '../../Shared/Utils';
import { useNavigate, useParams } from 'react-router-dom';
import { useDebounce } from "use-debounce";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { KeyBinding } from '@codemirror/view';
import "./index.css";
import SavingLoader from '../SavingLoader';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'

import 'react-reflex/styles.css'

interface ChapterEditorProps {
  files: SandpackFiles;
}

function CustomEditor(props: ChapterEditorProps) {
  const { chapterId } = useParams();
  const { sandpack } = useSandpack();
  const { files } = sandpack;
  const [debouncedFiles] = useDebounce(files, 1000);
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const handleSaveChapter = async () => {
    try {
      const data = {
        files: debouncedFiles,
        steps_completed: 1,
      };

      setSaving(true);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/user-chapter/save/${chapterId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(getToken() && { 'Authorization': `Bearer ${getToken()}` }),
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error(data.error);
        setSaving(false);
        if (data.error.includes("Token expired")) {
          navigate('/login');
        }
      } else {
        setSaving(false);
      }
    } catch (error: any) {
      console.log(typeof error);
      setSaving(false);
      if (error && error.includes && error.includes("Token expired")) {
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    handleSaveChapter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFiles]);

  return (
    <>
      {/* {<SavingLoader saving={saving} />}
      <ReflexContainer orientation="vertical">

        <ReflexElement 
          className="left-pane"
          minSize={200}
          maxSize={300}
        >
          <div className="pane-content">
            <SandpackFileExplorer />
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true} />

        <ReflexElement
          className="middle-pane"
          minSize={100}>
          <div className="pane-content">
            <SandpackCodeEditor
              style={{ height: "80vh" }}
              extensions={[autocompletion()]}
              extensionsKeymap={completionKeymap as KeyBinding[]}
              closableTabs={true}
            />
          </div>
        </ReflexElement>

        <ReflexSplitter propagate={true} />

        <ReflexElement 
          className="right-pane"
          minSize={100}
        >
          <div className="pane-content">
            <SandpackPreview style={{ height: "80vh" }} />
          </div>
        </ReflexElement>

      </ReflexContainer> */}

      {/* <SandpackFileExplorer />  */}
      <div className='rounded-lg border border-neutral-200 bg-white divide-y divide-neutral-200'>
        <SandpackCodeEditor  
            style={{ height: "80vh" }}
            extensions={[autocompletion()]}
            extensionsKeymap={completionKeymap as KeyBinding[]}
            closableTabs={false}
          />
      </div>
      <div className='rounded-lg border border-neutral-200 bg-white divide-y divide-neutral-200'>
        <SandpackPreview style={{ height: "80vh" }}  />
      </div>
    </>
  )
}

function ChapterEditor(props: ChapterEditorProps) {
  
  return (
    <div className="">
      <SandpackProvider customSetup={{ dependencies: { "classnames": "latest" } }} theme="dark" template="react" files={props.files}>
        <SandpackLayout>
          <CustomEditor {...props} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default ChapterEditor;

