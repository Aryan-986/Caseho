import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const iPhoneModels = [
    'iPhone 6', 'iPhone 6 Plus', 'iPhone 6s', 'iPhone 6s Plus',
    'iPhone 7', 'iPhone 7 Plus', 'iPhone 8', 'iPhone 8 Plus',
    'iPhone X', 'iPhone XR', 'iPhone XS', 'iPhone XS Max',
    'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
    'iPhone 12', 'iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 12 Mini',
    'iPhone 13', 'iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 13 Mini',
    'iPhone 14', 'iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 14 Plus',
    'iPhone 15', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 15 Plus',
  ];

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Dropdown for Model Selection */}
          <div className="my-8">
            <label htmlFor="model-select" className="block mb-2 font-semibold">Select Model</label>
            <select
              id="model-select"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="border border-purple-500 px-4 py-2 rounded-md w-30"
            >
              <option value="" disabled>Select iPhone Model...</option>
              {iPhoneModels.map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, selectedModel)}
            disabled={!selectedModel}
            className={`bg-black text-white px-8 py-3 text-sm ${!selectedModel ? 'opacity-50 cursor-not-allowed' : 'active:bg-gray-700'}`}
          >
            ADD TO CART
          </button>

          {/* Additional Info */}
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
