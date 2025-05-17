import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Company 1',
      logo: 'https://placehold.co/200x100/e5e7eb/a3a3a3?text=Logo+1',
    },
    {
      name: 'Company 2',
      logo: 'https://placehold.co/200x100/e5e7eb/a3a3a3?text=Logo+2',
    },
    {
      name: 'Company 3',
      logo: 'https://placehold.co/200x100/e5e7eb/a3a3a3?text=Logo+3',
    },
    {
      name: 'Company 4',
      logo: 'https://placehold.co/200x100/e5e7eb/a3a3a3?text=Logo+4',
    },
    {
      name: 'Company 5',
      logo: 'https://placehold.co/200x100/e5e7eb/a3a3a3?text=Logo+5',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Empresas que Confían en <span className="text-yellow-500">Nosotros</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="py-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;