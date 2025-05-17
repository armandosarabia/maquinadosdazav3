import React from 'react';

interface ServiceFeature {
  features: string[];
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  service: ServiceFeature;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div 
      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-yellow-500"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;