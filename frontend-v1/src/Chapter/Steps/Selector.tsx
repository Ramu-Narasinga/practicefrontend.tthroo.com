import classNames from 'classnames';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FaChevronUp, FaChevronDown, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

interface SelectorProps { 
  stepTitles: String[],
  setActiveStep: Dispatch<SetStateAction<number>>,
  activeStep: number
}

const Selector: React.FC<SelectorProps> = (props) => {

  const [showSteps, setShowSteps] = useState(false);

  const handleToggle = () => {
    setShowSteps(!showSteps);
  }

  const handleStepClick = (index: number) => {
    if (index < 0 || index > props.stepTitles.length-1) {
      return;
    }
    props.setActiveStep(index);
  }

  return (
    <div className='flex flex-row items-center justify-center gap-3 px-2'>
      <FaLongArrowAltLeft className='cursor-pointer' onClick={() => handleStepClick(props.activeStep - 1)} />
        <button 
          className="bg-white text-black py-2 px-3 shadow-md text-left relative flex-1"
          onClick={handleToggle}
        >
          <span className='flex items-center gap-2 text-sm justify-between'>
            {props.stepTitles[props.activeStep]}
            {
              showSteps ? 
              <FaChevronUp /> :
              <FaChevronDown /> 
            }
          </span>
          {
            showSteps &&
              <nav className='shadow-md w-full absolute left-0'>
              <div className='mt-3 overflow-auto bg-white'>
                <ul className='m-0 p-0 pl-6 list-none relative'>
                  {
                    props.stepTitles.map((stepTitle, index) => 
                      <li 
                        className={
                          classNames(
                            'pt-4 hover:underline',
                            {
                              'underline': index === props.activeStep
                            }
                          )
                        } 
                        onClick={
                          () => {
                            handleStepClick(index);
                            handleToggle();
                          }
                        }
                      >
                        <span>{stepTitle}</span>
                      </li>
                    )
                  }
                </ul>
              </div>
            </nav>
          }
        </button>
        <FaLongArrowAltRight className='cursor-pointer' onClick={() => handleStepClick(props.activeStep + 1)} />
      </div>
  );
};

export default Selector;
