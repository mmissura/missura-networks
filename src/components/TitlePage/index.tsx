import React from 'react';

export const TitlePage = ({ title, icon }) => {
  return (
    <h2
      className='text-green-400 text-center 
                  2xl:text-4xl 2xl:text-start xl:text-4xl lg:text-4xl text-4xl font-bold flex justify-center items-center gap-x-2'
    >
      {icon}
      {title}
    </h2>
  );
};
