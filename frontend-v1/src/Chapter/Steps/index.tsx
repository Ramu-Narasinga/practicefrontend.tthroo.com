import { useEffect, useState } from "react";
import CollapsibleSidebar from "../../Shared/CollapsibleSidebar";
import { StepType } from "../types";
import Markdown from 'react-markdown';
import ModalImage from "react-modal-image";

import "./index.css";
import Selector from "./Selector";

function Steps(props: { chapterTitle: string, stepTitles: StepType[] }) {

  const [steps, setSteps] = useState<StepType[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const stepContents = await Promise.all(
          Array.from({ length: props.stepTitles.length }, async (_, i) => {
            const response = await fetch(`/assets/components/${props.chapterTitle}/steps/step-${i + 1}.md`);
            const content = await response.text();
            return { description: content };
          })
        );
        setSteps(stepContents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSteps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Selector 
        stepTitles={props.stepTitles.map(stepTitle => stepTitle.description)}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
      />
      {
        <Markdown 
        className="markdown py-4 px-8"
        components={{
          p: ({ node, children }) => <p className="mb-4">{children}</p>,
          h1: ({ node, children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
          h2: ({ node, children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
          h3: ({ node, children }) => <h3 className="text-xl font-bold mb-4">{children}</h3>,
          h4: ({ node, children }) => <h4 className="text-lg font-bold mb-4">{children}</h4>,
          h5: ({ node, children }) => <h5 className="text-base font-bold mb-4">{children}</h5>,
          h6: ({ node, children }) => <h6 className="text-sm font-bold mb-4">{children}</h6>,
          ul: ({ node, children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
          ol: ({ node, children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
          li: ({ node, children }) => <li className="mb-2">{children}</li>,
          strong: ({ node, children }) => <strong className="font-bold">{children}</strong>,
          em: ({ node, children }) => <em className="italic">{children}</em>,
          blockquote: ({ node, children }) => <blockquote className="border-l-4 border-gray-500 pl-4 italic">{children}</blockquote>,
          code: ({ node, children }) => {
            return <pre className="bg-gray-200 p-2 mb-4 overflow-auto"><code>{children}</code></pre>;
          },
          a: ({ node, children, href }) => <a href={href} className="text-blue-500 hover:underline">{children}</a>,
        }}
      >{steps[activeStep]?.description}</Markdown>
      }
    </>
  )
}

export default Steps;