import React from 'react';
import { Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 mb-4">{project.description}</p>
        <button className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors duration-200 w-full sm:w-auto">
          <Eye size={18} className="mr-2" />
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;