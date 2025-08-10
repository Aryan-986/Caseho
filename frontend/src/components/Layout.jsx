import React from 'react';
import { assets } from '../assets/assets';

const MoreAboutUs = () => {
  return (
    <div className="py-10 px-5">
      {/* Top heading */}
      <h2 className="text-center text-3xl font-bold mb-7 hidden sm:block">
        #💥 "Dress Your iPhone Like You Dress Yourself—Bold, Sleek, and Unstoppable!" 😎
      </h2>

      {/* Grid for top images - hidden on mobile */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {/* Image 1 */}
        <div>
          <img
            src={assets.layout4}
            alt="Image 4"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-2 border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 2 */}
        <div className="sm:block">
          <img
            src={assets.layout2}
            alt="Image 2"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-2 border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Image 3 */}
        <div className="hidden md:block">
          <img
            src={assets.layout3}
            alt="Image 3"
            className="w-full h-[550px] object-cover rounded-lg shadow-md border-2 border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Bottom big image with heading - always visible */}
      <div>
        <h2 className="text-center text-3xl font-bold mb-7">
          #📱 "Style, Protection, and Personality—All in One Case!" ✨
        </h2>
        <img
          src={assets.layout1}
          alt="Image 1"
          className="w-full h-[450px] object-cover rounded-lg shadow-md border-2 border-gray-300 hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default MoreAboutUs;
