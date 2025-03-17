import { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const HeroBanner = () => {
  const images = [
    assets.hero_img1,
    assets.hero_img2,
    assets.hero_img3,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[25vh] sm:h-[60vh] md:h-screen overflow-hidden mt-0 sm:mt-10 md:mt-10">
      <img
        src={images[currentImage]}
        alt="Hero Banner"
        className="absolute w-full h-full object-contain object-center"
      />

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full cursor-pointer"
      >
        &gt;
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-5 sm:bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
