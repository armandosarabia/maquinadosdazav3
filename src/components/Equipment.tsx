import React from 'react';
import { ArrowRight } from 'lucide-react';

const Equipment: React.FC = () => {
  const equipment = [
    {
      name: 'Centro de Mecanizado 5 Ejes',
      description: 'Permite la fabricación de piezas complejas con máxima precisión desde múltiples ángulos.',
      specs: ['Tolerancia: ±0.005mm', 'Área de trabajo: 800x600x500mm', 'Velocidad: 15,000 RPM'],
      image: 'https://images.pexels.com/photos/28929510/pexels-photo-28929510/free-photo-of-torno-cnc-industrial-en-un-taller-de-maquinas-con-mucha-actividad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Torno CNC de Alta Precisión',
      description: 'Ideal para piezas cilíndricas con acabados y tolerancias de alta precisión.',
      specs: ['Tolerancia: ±0.01mm', 'Diámetro máximo: 400mm', 'Longitud máxima: 1000mm'],
      image: 'https://images.pexels.com/photos/17260646/pexels-photo-17260646/free-photo-of-industria-lapiz-ordenador-produccion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Fresadora CNC Vertical',
      description: 'Equipamiento versátil para trabajos de fresado en materiales diversos.',
      specs: ['Precisión: ±0.02mm', 'Área de trabajo: 1200x600mm', 'Potencia: 15kW'],
      image: 'https://images.pexels.com/photos/8865189/pexels-photo-8865189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Electroerosión por Hilo',
      description: 'Tecnología de corte mediante descargas eléctricas para geometrías complejas.',
      specs: ['Precisión: ±0.003mm', 'Altura máxima: 400mm', 'Espesor máximo: 300mm'],
      image: 'https://media.istockphoto.com/id/1457389145/es/foto/primer-plano-de-la-m%C3%A1quina-de-electroerosi%C3%B3n-por-hilo-cortando-las-piezas-del-inserto-del-molde.jpg?b=1&s=612x612&w=0&k=20&c=4-mdYgxFLTSsQYffEtJ4-VKtzGMLmygx52-uSeRffmc='
    }
  ];

  return (
    <section id="equipamiento" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro <span className="text-yellow-500">Equipamiento</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Contamos con tecnología de última generación para ofrecer servicios de maquinado de la más alta calidad y precisión.
          </p>
        </div>

        <div className="space-y-16">
          {equipment.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.name}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Especificaciones Técnicas:</h4>
                  <ul className="space-y-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight size={16} className="text-yellow-500 mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;