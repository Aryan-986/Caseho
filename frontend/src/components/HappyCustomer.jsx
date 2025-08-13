import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const HappyCustomers = () => {
  const images = [
    assets.c1, assets.c2, assets.c3, assets.c4,
    assets.c5, assets.c6, assets.c7, assets.c8,
    assets.c9, assets.c10, assets.c11, assets.c12,
    assets.c13, assets.c14, assets.c15, assets.c16,
  ];

  return (
    <div className="py-10 px-5">
      {/* Header */}
      <div className='text-center py-7'>
        <Title text1={'HAPPY'} text2={'CUSTOMERS'} />
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 mb-10">
        Our customers love us. Here's a glimpse of our satisfied customers. 600+ Happy Customers
      </p>

      {/* Grid of Images */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${index === 2 ? "hidden sm:block" : ""}`} // hide 3rd image on mobile
          >
            <img
              src={image}
              alt={`Customer ${index + 1}`}
              className="w-full h-[250px] object-cover rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomers;
