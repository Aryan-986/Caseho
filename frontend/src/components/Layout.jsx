import React from 'react';
import { assets } from '../assets/assets';

const MoreAboutUs = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-3xl font-bold mb-7">#💥 "Dress Your iPhone Like You Dress Yourself—Bold, Sleek, and Unstoppable!" 😎</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div>
          <img
            src={assets.layout4}
            alt="Image 4"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-[2px] border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Bottom Images */}
        <div>
          <img
            src={assets.layout2}
            alt="Image 2"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-[2px] border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div>
          <img
            src={assets.layout3}
            alt="Image 3"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-[2px] border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Top Large Image */}
        <div className="lg:col-span-3">
        <h2 className="text-center text-3xl font-bold mt-10 mb-7">#📱 "Style, Protection, and Personality—All in One Case!" ✨</h2>
          <img
            src={assets.layout1}
            alt="Image 1"
            className="w-full h-[450px] object-cover rounded-lg shadow-md border-[2px] border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

      </div>
    </div>
  );
};

export default MoreAboutUs;
