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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-8 md:mb-32">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project: ProjectProps, index: number) => (
          <div key={project.name} className={`flex justify-center mb-4 ${index === projects.length - 1 && projects.length % 3 !== 0 ? 'lg:col-span-3' : ''}`}>
            <Project name={project.name} role={project.role} image={project.image} link={project.link} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
