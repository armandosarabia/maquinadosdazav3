import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'Componentes Aeroespaciales',
      description: 'Fabricación de piezas de alta precisión para la industria aeroespacial.',
      image: 'https://images.pexels.com/photos/7097290/pexels-photo-7097290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'aeroespacial',
    },
    {
      id: 2,
      title: 'Piezas Automotrices',
      description: 'Desarrollo de componentes personalizados para sistemas de motor de alto rendimiento.',
      image: 'https://images.pexels.com/photos/7097290/pexels-photo-7097290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'automotriz',
    },
    {
      id: 3,
      title: 'Moldes Industriales',
      description: 'Creación de moldes de precisión para inyección de plásticos.',
      image: 'https://images.pexels.com/photos/7097290/pexels-photo-7097290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'moldes',
    },
    {
      id: 4,
      title: 'Herramientas Especializadas',
      description: 'Fabricación de herramientas a medida para procesos industriales específicos.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'herramientas',
    },
    {
      id: 5,
      title: 'Componentes Médicos',
      description: 'Piezas de precisión para equipos médicos y dispositivos quirúrgicos.',
      image: 'https://images.pexels.com/photos/1476318/pexels-photo-1476318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'medico',
    },
    {
      id: 6,
      title: 'Piezas Electrónicas',
      description: 'Componentes mecanizados para la industria electrónica y de telecomunicaciones.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'electronica',
    },
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'aeroespacial', label: 'Aeroespacial' },
    { id: 'automotriz', label: 'Automotriz' },
    { id: 'moldes', label: 'Moldes' },
    { id: 'herramientas', label: 'Herramientas' },
    { id: 'medico', label: 'Médico' },
    { id: 'electronica', label: 'Electrónica' },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-yellow-500">Portafolio</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explora nuestra selección de proyectos destacados que demuestran nuestra capacidad técnica y compromiso con la excelencia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;