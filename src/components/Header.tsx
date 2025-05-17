import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold text-gray-800">
              <img
              src="https://github.com/armandosarabia/maquinadosdazav3/blob/main/img/logodaza-225-81.png?raw=true"
              alt="DAZA"
              className="h-12 w-auto"
               />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Equipamiento', 'Nosotros', 'Contacto'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-yellow-500 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+555536973579"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
            >
              <Phone size={18} className="mr-2" />
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:bg-gray-200 focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8 px-4">
          {['Inicio', 'Servicios', 'Proyectos', 'Equipamiento', 'Nosotros', 'Contacto'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-200 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="tel:+555536973579"
            className="mt-6 block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Cotizar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;