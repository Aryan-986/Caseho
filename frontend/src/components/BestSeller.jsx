import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(null);

  // Filter bestsellers
  useEffect(() => {
    const bestProducts = products.filter(item => item.bestseller);
    setBestSeller(bestProducts.slice(0, 6));
  }, [products]);

  // Dynamically set slides based on window width
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(2);       // Mobile
      else if (width < 1024) setSlidesToShow(3); // Tablet
      else setSlidesToShow(4);                   // Desktop
    };

    updateSlides(); // initial check
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Wait until slidesToShow is calculated
  if (slidesToShow === null) return null;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      {/* Heading */}
      <div className='text-center mb-10'>
        <h2 className="text-4xl font-bold mb-5">#Best Selling Products</h2>
      </div>

      {/* Slider with proper padding */}
      <div className='px-1 sm:px-4'> {/* Add horizontal padding */}
        <Slider {...settings}>
          {bestSeller.map(item => (
            <div key={item._id} className='px-2 sm:px-3'> {/* Slide padding */}
              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
