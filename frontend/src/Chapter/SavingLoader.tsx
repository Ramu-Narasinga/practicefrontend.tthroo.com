import React from 'react';

const SavingLoader = ({ saving }: {saving: boolean}) => {
  return (
    <div className={`text-black absolute top-[10.5%] left-[17%] flex items-center justify-center ${saving ? 'visible' : 'invisible'}`}>
      <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-violet-700"></div>
      <div className='text-sm'>Saving...</div>
    </div>
  );
};

export default SavingLoader;