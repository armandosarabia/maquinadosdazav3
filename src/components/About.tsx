import React from 'react';
import { Award, Users, Clock, CheckSquare } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      value: '15+',
      label: 'Años de Experiencia',
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      value: '500+',
      label: 'Clientes Satisfechos',
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-yellow-500" />,
      value: '5000+',
      label: 'Proyectos Completados',
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      value: '10+',
      label: 'Certificaciones',
    },
  ];

  const certifications = [
    'CERTIFICACION 1',
    'CERTIFICACION 2',
    'CERTIFICACION 3',
    'CERTIFICACION 4',
  ];

  const industries = [
    'Aeroespacial',
    'Automotriz',
    'Médica',
    'Electrónica',
    'Energía',
    'Defensa',
    'Petróleo y Gas',
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sobre <span className="text-yellow-500">Nosotros</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Con más de 50 años de experiencia, en DAZA nos especializamos en proporcionar soluciones de maquinado CNC de alta precisión para las industrias más exigentes. Nuestro compromiso con la excelencia técnica nos ha posicionado como líderes en el sector.
            </p>
            <p className="text-gray-600 mb-8">
              Contamos con un equipo de ingenieros y técnicos altamente capacitados, respaldados por tecnología de punta, que nos permite ofrecer componentes que cumplen con los estándares más rigurosos de calidad y precisión.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Certificaciones</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industrias Atendidas</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-yellow-500"
                >
                  <div className="flex items-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h3>
              <div className="italic text-gray-600 border-l-4 border-yellow-500 pl-4">
                "DAZA ha sido un socio invaluable para nuestra empresa. Su precisión, puntualidad y capacidad técnica nos han permitido cumplir con los exigentes estándares de nuestra industria."
                <p className="mt-2 font-semibold text-gray-800 not-italic">— Juan Pérez, Director de Operaciones, Aerotech Industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;