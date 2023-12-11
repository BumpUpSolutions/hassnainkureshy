import React, { useState } from 'react';

import { Rating } from './rating';

import { skills } from '../../utils/skills';

interface SkillsState {
  "Client-Side": boolean;
  "Server-Side": boolean;
  "DevOps": boolean;
  "Tools": boolean;
}

const Stack = () => {
  const [isOpen, setIsOpen] = useState<SkillsState>({ 
    "Client-Side": true, 
    "Server-Side": false, 
    "DevOps": false, 
    "Tools": false 
  });

  const toggleSection = (section: keyof SkillsState) => {
    setIsOpen(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  const renderSkills = (category: keyof SkillsState) => (
    <div className="grid grid-cols-3 gap-4">
      {skills[category].map(skill => (
        <Rating key={skill.name} name={skill.name} className={skill.className} rating={skill.rating} />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-8">Skills and Tech Stack</h2>
      {Object.keys(skills).map((category, index) => (
        <div className='mb-5' key={index}>
          <button className="hover:text-orange-500 text-xl font-semibold pb-2 mb-4 w-full text-left border-b-2 border-orange-500" onClick={() => toggleSection(category as keyof SkillsState)}>
            {category}
          </button>
          {isOpen[category as keyof SkillsState] && renderSkills(category as keyof SkillsState)}
        </div>
      ))}
    </div>
  );
};

export default Stack;
