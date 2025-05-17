import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          newsletter: false,
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-yellow-500" />,
      title: 'Teléfono',
      details: '+52 (55) 36973579',
    },
    {
      icon: <Mail className="w-5 h-5 text-yellow-500" />,
      title: 'Email',
      details: 'contacto@maquinadosdaza.com.mx',
    },
    {
      icon: <MapPin className="w-5 h-5 text-yellow-500" />,
      title: 'Ubicación',
      details: 'Av. Niños Heroes 75, Loma Linda, 53619 Naucalpan de Juárez, Méx',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contacta con <span className="text-yellow-500">Nosotros</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Estamos listos para colaborar en tu próximo proyecto. Contáctanos para una cotización o asesoría técnica personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 bg-white p-2 rounded-full shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <p className="flex justify-between text-gray-700">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Sábado:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </p>
                  <p className="flex justify-between text-gray-700">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Suscribirme al newsletter para recibir actualizaciones y ofertas
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Ubicación de DAZA Maquinados"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9227235292556!2d-99.24281119999999!3d19.458898299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203b0e0c6bf45%3A0xf6eb23b069f4b7dc!2sTaller%20de%20torno%20Maquinados%20y%20servicios%20industriales%20Daza!5e0!3m2!1ses!2smx!4v1747453660845!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;