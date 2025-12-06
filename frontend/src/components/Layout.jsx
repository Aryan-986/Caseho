import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

// Note: Ensure assets.hero_img1 is the Men's image and assets.hero_img2 is the Women's image
// and assets.hero_img3 is no longer needed in this split-banner design.

const HeroBanner = () => {
  const categories = [
    {
      img: assets.hero_img1,
      label: "MEN'S SELECTION",
      link: "/collection/men", // Target route for men's watches
    },
    {
      img: assets.hero_img2,
      label: "WOMEN'S SELECTION",
      link: "/collection/women", // Target route for women's watches
    },
  ];

  return (
    // We remove the relative positioning here to allow the main text to sit above the images
    <div className="w-full pt-10 pb-16 bg-white"> 
      
      {/* 1. Main Campaign Text Section (Above Images) */}
      <div className="container mx-auto px-7 text-center max-w-4xl mb-12">
        <p className="text-gray-600 text-sm tracking-[0.3em] mb-2 uppercase font-light">
          TIME TO CELEBRATE
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-red-700 leading-tight mb-4">
          THE SEASON OF GIVING
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg font-light mb-8">
          Explore our handpicked collection of watches, fine jewellery, and accessories this holiday. From our celebrated icons to our latest arrivals. Find your next gift, all wrapped-up and ready to give.
        </p>
      </div>

      {/* 2. Split Banner Image Section (Men's & Women's) */}
      <div className="container mx-auto px-4 md:px-7">
        <div className="flex flex-col md:flex-row gap-4 md:gap-7">
          
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => window.scrollTo(0, 0)}
              // The w-full makes it full width on mobile, w-1/2 makes them side-by-side on desktop
              className="w-full md:w-1/2 relative h-[55vh] overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

              {/* Text Label and Explore Button */}
              <div className="absolute bottom-6 left-6 text-white text-left z-10">
                <p className="text-2xl font-bold mb-1 tracking-wide">
                  {item.label}
                </p>
                <p className="text-sm tracking-widest uppercase font-semibold">
                  EXPLORE
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HeroBanner;