import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import { ProjectProps } from './index';

export const Project: React.FC<ProjectProps> = ({ name, role, image, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`project-card text-center ${inView ? 'visible' : ''}`} style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
      <div className="card-shadow image-container rounded-lg overflow-hidden mb-4" style={{ maxWidth: '100%', height: 'auto' }}>
        <Image 
          src={image}
          alt={name}
          width={500}
          height={300}
        />
      </div>
      <h1 className="text-xl font-bold text-orange-500">{name}</h1>
      <h2>{role}</h2>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Visit Site</Link>
    </div>
  );
};
