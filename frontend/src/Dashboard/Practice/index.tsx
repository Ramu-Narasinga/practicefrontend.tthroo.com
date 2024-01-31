import React, { useState } from 'react';
import UnitChapters from './UnitChapters';
import classNames from 'classnames';
import { Filters } from '../Filters';

function Practice() {
  const [unit, setUnit] = useState("uiComponents");

  const dashboard = "dashboard";
  const landingPage = "landingPage";
  const uiComponents = "uiComponents";

  const handleItemClick = (selectedUnit: string) => {
    setUnit(selectedUnit);
  };

  return (
    <div className='flex'>
      <div className='w-1/4'>
        <Filters />
      </div>
      <div className='w-3/4'>
        <UnitChapters unit={unit} />
      </div>
    </div>
  );
}

export default Practice;
