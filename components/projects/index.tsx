import React from 'react';

import { Project } from './project';

import { projects } from '../../utils/projects';

export interface ProjectProps {
  name: string;
  role: string;
  image: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  return (
    <div id='projects' className='lg:px-24 md:px-16 px-2 mt-8 md:mt-32'>
      <h2 className='text-4xl font-bold text-center mb-8 text-orange-500'>Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
        {projects.map((project: ProjectProps, index: number) => (
          <div key={project.name} className={`flex justify-center ${index === projects.length - 1 && projects.length % 3 !== 0 ? 'lg:col-span-3' : ''}`}>
            <Project name={project.name} role={project.role} image={project.image} link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
