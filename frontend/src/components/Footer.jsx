import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = () => {
  const businessWhatsappNumber = '9749407400';
  const businessWhatsappLink = `https://wa.me/${businessWhatsappNumber}`;
  const devWhatsappNumber = '9867378511';
  const devWhatsappLink = `https://wa.me/${devWhatsappNumber}`;

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
          
          {/* Company Info */}
          <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Real Protech Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Real Protech offers premium iPhone cases designed to provide ultimate protection with unmatched style. Explore our exclusive collection and
              find the perfect blend of aesthetics and durability for your device.
            </p>
          </div>

          {/* GUIDE Section */}
          <div>
            <p className='text-xl font-medium mb-5 text-gray-800'>GUIDE</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li><a href="/about" className="hover:text-gray-800 transition-colors">Shopping guide</a></li>
              <li><a href="/about" className="hover:text-gray-800 transition-colors">About overseas shipping [For Overseas Customer]</a></li>
              <li><a href="/about" className="hover:text-gray-800 transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* SNS Section */}
          <div>
            <p className='text-xl font-medium mb-5 text-gray-800'>SNS</p>
            <div className='flex gap-4'>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/realReal Protech2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-pink-100 rounded-full transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@realReal Protech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-black rounded-full transition-colors group"
              >
                <svg 
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={businessWhatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-green-100 rounded-full transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6">
              <p className='text-gray-600 mb-2'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+977 {businessWhatsappNumber}</li>
                <li>
                  <a href={businessWhatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                    WhatsApp: {businessWhatsappNumber}
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Language and Currency Selector */}
        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <select className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600">
                <option>NPRRS ₹</option>
                <option>USD $</option>
              </select>
              <select className="bg-white border border-gray-300 rounded px-3 py-1 text-sm text-gray-600">
                <option>ENGLISH</option>
                <option>नेपाली</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copyright Info */}
        <div className="border-t border-gray-200 py-5">
          <p className='text-sm text-center text-gray-500'>
            Copyright © 2024 Real Protech. All Rights Reserved.
          </p>
          <p className='py-2 text-xs text-center text-gray-500'>
            Dev by <a href={devWhatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Aryan K</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
