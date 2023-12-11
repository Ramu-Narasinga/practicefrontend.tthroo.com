import React, { useState } from 'react';
import UnitChapters from './UnitChapters';
import classNames from 'classnames';

function Practice() {
  const [unit, setUnit] = useState("uiComponents");

  const dashboard = "dashboard";
  const landingPage = "landingPage";
  const uiComponents = "uiComponents";

  const handleItemClick = (selectedUnit: string) => {
    setUnit(selectedUnit);
  };

  return (
    <>
      <div className="flex items-center border-b border-solid border-gray-300 gap-10 px-4 sm:px-6 md:px-8 align-center">
        <div 
          className={classNames('text-sm py-4 cursor-pointer', {
            'border-b-2 border-solid border-violet-700 ': unit === uiComponents
          })}
          onClick={() => handleItemClick(uiComponents)}
        >
          UI Components
        </div>
        <div 
          className={classNames('text-sm py-4 cursor-pointer', {
            'border-b-2 border-solid border-violet-700': unit === landingPage
          })}
          onClick={() => handleItemClick(landingPage)}
        >
          Landing Page
        </div>
        <div 
          className={classNames('text-sm py-4 cursor-pointer', {
            'border-b-2 border-solid border-violet-700': unit === dashboard
          })}
          onClick={() => handleItemClick(dashboard)}
        >
          Dashboard
        </div>
      </div>
      <UnitChapters unit={unit} />
    </>
  );
}

export default Practice;
