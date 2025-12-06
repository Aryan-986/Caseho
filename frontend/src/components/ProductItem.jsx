import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, oldPrice }) => {
  const { currency } = useContext(ShopContext);

  // Optional: Calculate discount percentage
  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className='text-gray-700 cursor-pointer'
      to={`/product/${id}`}
    >
      
      <div className='w-full h-[200px] overflow-hidden'>
        <img
          className='object-cover w-70 h-full hover:scale-110 transition ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>

      {/* Price Display */}
      <p className='text-sm font-medium flex items-center gap-2'>
        <span>{currency}{price}</span>
        {oldPrice && (
          <span className='line-through text-gray-500'>
            {currency}{oldPrice}
          </span>
        )}
        {discount && (
          <span className='text-red-500 text-xs font-semibold'>
            {discount}% OFF
          </span>
        )}
      </p>
    </Link>
  );
};

export default ProductItem;