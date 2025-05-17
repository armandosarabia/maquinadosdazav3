import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gray-900">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="absolute object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source
            src="https://player.vimeo.com/external/380878571.sd.mp4?s=49cda32308911b6164cfdd2e86ffff0bef97add1&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fadeIn">
            Precisión y Excelencia en 
            <span className="text-yellow-500"> Maquinados CNC</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 opacity-0 animate-fadeInDelay">
            Soluciones de manufactura avanzada para la industria moderna
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInDelay2">
            <a
              href="#contacto"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-lg"
            >
              Solicitar Cotización
            </a>
            <a
              href="#servicios"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 text-lg"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce z-20"
        onClick={scrollToServices}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;