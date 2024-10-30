import React from 'react'
import { projects } from '@/data/projects'
import Image from 'next/image'
const Projects = () => {
  return (
    <>
         <div className="allProjects grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="singleProject">
        {/* Image Container */}
        <div className="p-2 border border-gray-400 rounded-xl hover:transform hover:translate-y-[-12px] transition-transform duration-300">

        <div className="relative w-full h-64 ">
          <Image
          className='rounded-md'
            src={project.img}
            alt={project.name || ''}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        </div>
        
        {/* Text Content */}
        <div className="py-2 text-start">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-sm text-blue-300">{project.description}</p>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 underline"
          >
            View Project
          </a>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}

export default Projects