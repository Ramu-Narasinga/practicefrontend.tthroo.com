import React, { useState } from 'react';
import UnitChapters from './UnitChapters';
import classNames from 'classnames';
import { Filters } from '../Filters';
import ChapterCard from './ChapterCard';

function Practice() {
  const [unit, setUnit] = useState("uiComponents");

  return (
    <div className='flex'>
      <div className='w-1/4'>
        <Filters />
      </div>
      <div className='w-3/4'>
        <div className='flex gap-2 px-4 flex-wrap'>
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
          <ChapterCard 
            chapter={{
              id: 1,
              title: "Authentication",
              description: "desc"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Practice;
