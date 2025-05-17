import React from 'react';
import { Settings, Layers, CheckCircle, PenTool as Tool, RefreshCw, PenTool } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Maquinado CNC',
      description:
        'Fabricación de piezas de alta precisión utilizando tecnología CNC de última generación con tolerancias mínimas.',
      icon: <Settings className="w-10 h-10 text-yellow-500" />,
      features: ['Tolerancias mínimas', 'Alta precisión', 'Acabados superiores'],
    },
    {
      title: 'Diseño CAD/CAM',
      description:
        'Desarrollo de modelos y programación avanzada para la manufactura precisa de componentes complejos.',
      icon: <PenTool className="w-10 h-10 text-yellow-500" />,
      features: ['Modelado 3D', 'Optimización de producción', 'Simulación virtual'],
    },
    {
      title: 'Fabricación de Prototipos',
      description:
        'Desarrollo rápido de prototipos funcionales para validación de diseño y pruebas de concepto.',
      icon: <Layers className="w-10 h-10 text-yellow-500" />,
      features: ['Iteración rápida', 'Múltiples materiales', 'Validación de conceptos'],
    },
    {
      title: 'Ingeniería Inversa',
      description:
        'Recreación digital y física de componentes existentes para replicación o mejora.',
      icon: <RefreshCw className="w-10 h-10 text-yellow-500" />,
      features: ['Escaneo 3D', 'Documentación técnica', 'Mejora de diseños'],
    },
    {
      title: 'Producción en Serie',
      description:
        'Fabricación eficiente de componentes en cantidades medianas y grandes con control de calidad.',
      icon: <CheckCircle className="w-10 h-10 text-yellow-500" />,
      features: ['Costos optimizados', 'Consistencia garantizada', 'Tiempos reducidos'],
    },
    {
      title: 'Herramientas Especializadas',
      description:
        'Diseño y fabricación de herramientas y dispositivos de sujeción personalizados.',
      icon: <Tool className="w-10 h-10 text-yellow-500" />,
      features: ['Soluciones a medida', 'Alta durabilidad', 'Mejora de procesos'],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros <span className="text-yellow-500">Servicios</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofrecemos soluciones integrales de manufactura con tecnología de punta para las
            industrias más exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-md transition-colors duration-200 inline-block"
          >
            Consulta tu Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;