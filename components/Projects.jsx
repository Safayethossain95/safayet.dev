'use client';
import { projects } from "@/data/projects";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const Projects = () => {
  const router = useRouter();
  const handlereroute=(myitem)=>{
    window.open(myitem.liveLink, '_blank');
  }
  return (
    <>
      <h1 className="text-3xl font-bold border-b-2 border-fun-pink mb-[50px] text-left">Projects - </h1>
      <div className="allProjects grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} onClick={()=>handlereroute(project)}  className="singleProject" style={{cursor:"pointer"}}>
            {/* Image Container */}
            <div className="p-2 border border-gray-400 hover:border-blue-400 rounded-xl hover:transform hover:translate-y-[-12px] transition-transform duration-300">
              <div className="relative w-full h-64">
                <Image
                
                  className="rounded-md"
                  src={project.img}
                  alt={project.name || ""}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="py-2 text-start">
              <h2 className="text-xl font-bold flex justify-between">
                {project.name}{" "}
                <div className="div flex gap-[10px]">
                <FaExternalLinkAlt
                  className="hover:text-blue-400 duration-500"
                  style={{ width: "14px" }}
                />
               
                </div>
              </h2>
              <p className="font-semibold text-sm text-[#6a87b1] heroShinyBg">
                {project.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
