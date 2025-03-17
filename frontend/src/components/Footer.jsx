import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const whatsappNumber = '9867378511';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">

          {/* Company Info */}
          <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Caseho Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Caseho offers premium iPhone cases designed to provide ultimate protection with unmatched style. Explore our exclusive collection and
              find the perfect blend of aesthetics and durability for your device.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About Us</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+977-9841234567</li>
              <li>support@caseho.com</li>
            </ul>
          </div>

        </div>

        {/* Copyright Info */}
        <div className="border-t border-gray-200 py-5 mt-8">
          <p className='text-sm text-center text-gray-500'>
            Copyright © 2024 Caseho. All Rights Reserved.
          </p>
          <p className='py-2 text-xs text-center text-gray-500'>
            Dev by <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Aryan K</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
