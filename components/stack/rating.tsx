import React from 'react';

interface SkillProps {
  name: string;
  className: string;
  rating: number;
}

export const Rating: React.FC<SkillProps> = ({ name, className, rating }) => {
  const progress = (rating / 5) * 100;

  return (
    <div className='flex justify-between items-center'>
      <div className='mt-2 flex items-center'>
        <i className={`${className} text-lg colored mr-2`}></i>
        {name}
      </div>
      <div className='relative w-12 h-12'>
        <div
          className='absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-900'
        />
        <div
          className='absolute top-0 left-0 w-full h-full rounded-full border-4 border-orange-500'
          style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
        />

        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <span className='text-sm font-semibold'>{rating}/5</span>
        </div>
      </div>
    </div>
  );
};
