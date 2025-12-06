import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const MAX_PRODUCTS = 8;
  const [latestProducts, setLatestProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [slidesToShow, setSlidesToShow] = useState(null); // null until width known

  // Set slides based on window width
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesToShow(2);       // Mobile
      else if (width < 1024) setSlidesToShow(3); // Tablet
      else setSlidesToShow(4);                   // Desktop
    };

    updateSlides(); // initial check
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Sort products
  useEffect(() => {
    let sorted = [...products.slice(0, MAX_PRODUCTS)];
    if (sortOrder === "lowToHigh") sorted.sort((a, b) => a.price - b.price);
    else if (sortOrder === "highToLow") sorted.sort((a, b) => b.price - a.price);
    setLatestProducts(sorted);
  }, [products, sortOrder]);

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
      <div className='text-center mb-10'>
        <Title text1={'NEW'} text2={'ARRIVALS'} />
      </div>

      <div className="flex justify-end mb-8">
        <select
          className="border border-gray-300 bg-white text-sm py-2 px-4 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-black transition duration-150 ease-in-out cursor-pointer"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className='mx-[-12px] sm:mx-[-20px]'>
        <Slider {...settings}>
          {latestProducts.map(item => (
            <div key={item._id} className='p-3 sm:p-4'>
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-16">
        <Link
          to="/collection"
          className="inline-block px-8 py-3 border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition duration-300 ease-in-out shadow-md"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestCollection;
