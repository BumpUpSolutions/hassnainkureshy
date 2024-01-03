import React, { useState } from 'react';

import { Rating } from './rating';

import { skills } from '../../utils/skills';

interface Skill {
  name: string;
  className: string;
  rating: number;
}

interface Skills {
  'Client-Side': Skill[];
  'Server-Side': Skill[];
  'DevOps': Skill[];
  'Tools': Skill[];
}

const Stack = () => {
  const [openSection, setOpenSection] = useState<keyof Skills | null>('Client-Side');

  const toggleSection = (section: keyof Skills) => {
    setOpenSection(openSection === section ? null : section);
  };


  const renderSkills = (category: keyof Skills) => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {skills[category].map(skill => (
        <Rating key={skill.name} name={skill.name} className={skill.className} rating={skill.rating} />
      ))}
    </div>
  );

  return (
    <div id='stack' className='lg:px-24 md:px-16 px-2 mt-8 md:mt-32'>
      <h2 className='text-4xl font-bold text-center text-orange-500 mb-8'>Skills and Tech Stack</h2>
      {Object.keys(skills).map((category, index) => (
        <div className='mb-5' key={index}>
          <button className='hover:text-orange-500 text-xl font-semibold pb-2 mb-4 w-full text-left border-b-2 border-orange-500' onClick={() => toggleSection(category as keyof Skills)}>
            {category}
          </button>
          {openSection === category && renderSkills(category as keyof Skills)}
        </div>
      ))}
    </div>
  );
};

export default Stack;
