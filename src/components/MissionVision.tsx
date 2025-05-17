import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="mision-vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm" data-aos="fade-right">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Nuestra Misión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar soluciones de maquinado de precisión que excedan las expectativas de nuestros clientes, 
              mediante la implementación de tecnología de vanguardia y el compromiso constante con la calidad y la 
              innovación. Nos dedicamos a ser un socio estratégico en el éxito de nuestros clientes, ofreciendo 
              servicios que impulsan su competitividad en el mercado global.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm" data-aos="fade-left">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Nuestra Visión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser reconocidos como el líder nacional en servicios de maquinado de precisión, destacando por 
              nuestra excelencia técnica, innovación continua y compromiso con el desarrollo sostenible. 
              Aspiramos a expandir nuestra presencia en mercados internacionales, manteniendo los más altos 
              estándares de calidad y servicio al cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;