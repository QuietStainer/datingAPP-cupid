import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-between rounded-lg overflow-hidden">
      <div className="flex flex-col w-full justify-center items-center">
        <img className='w-[220px] h-[82px]' alt="dashboard_logo" src='/image/logo/logo.png' />
      </div>
    </div>
  );
};

export default Loading;
