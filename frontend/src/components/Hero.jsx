import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='relative flex flex-col sm:flex-row items-center overflow-hidden'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-20 px-5'>
        <div className='text-[#414141] text-center sm:text-left'>
          <div className='flex items-center gap-2 justify-center sm:justify-start'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>Upgrade Your iPhone Look</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed px-3'>
            The Ultimate Protection with Unmatched Style
          </h1>
          <h1 className='prata-regular text-1xl sm:py-1 lg:text-3xl leading-relaxed px-4'>
            Premium iPhone Cases in Nepal
          </h1>
          <p className='text-gray-600 mt-4 text-sm md:text-base px-3'>
            Explore our exclusive collection of iPhone cases, meticulously designed to offer robust protection and elevate your style.
            Find the perfect blend of aesthetics and durability for your device.
          </p>
          <div className='flex items-center gap-2 my-5 justify-center sm:justify-start'>
            <Link to="/collection" className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>
              Shop Now
            </Link>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side (Multi-Image Layout) */}
      <div className='w-full sm:w-1/2 grid grid-cols-2 gap-2 p-2'>
        <img className='w-full h-auto object-cover rounded-lg shadow-md' src={assets.layout1} alt='iPhone Case 1' />
        <img className='w-full h-auto object-cover rounded-lg shadow-md' src={assets.layout3} alt='iPhone Case 2' />
      </div>
    </div>
  );
};

export default Hero;
