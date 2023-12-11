import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChapterCard from './ChapterCard';
import { ChapterCardType } from './types';
import { SkeletonLoader } from './UnitChapters/SkeletonLoader';
import UnitChapters from './UnitChapters';

function Practice() {
  const [unit, setUnit] = useState("uiComponents");

  return (
    <>
      <div className="flex items-center border-b border-solid border-gray-300 gap-10 h-12 px-4 sm:px-6 md:px-8 align-center">
        <div className='text-sm' onClick={() => setUnit("uiComponents")}>UI Components</div>
        <div className='text-sm' onClick={() => setUnit("landingPage")}>Landing Page</div>
        <div className='text-sm' onClick={() => setUnit("dashboard")}>Dashboard</div>
      </div>
      <UnitChapters unit={unit} />
    </>
  );
}

export default Practice;
