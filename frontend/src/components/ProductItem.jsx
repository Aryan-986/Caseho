import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='w-full h-[200px] overflow-hidden'>
        <img
          className='object-cover w-70 h-full hover:scale-110 transition ease-in-out'
          src={image[0]}
          alt=""
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
