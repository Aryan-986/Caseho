import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0]); // default to first color
      }
    }
  }, [productId, products]);

  // Calculate discount percentage
  const discount =
    productData?.oldPrice && productData.oldPrice > productData.price
      ? Math.round(((productData.oldPrice - productData.price) / productData.oldPrice) * 100)
      : null;

  return productData ? (
    <div className="border-t-2 pt-32 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">

        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2">
            {productData.image.map((item, index) => (
              <div
                key={index}
                onClick={() => setImage(item)}
                className="aspect-square w-[24%] sm:w-full sm:mb-3 cursor-pointer relative rounded-md overflow-hidden border border-gray-300"
              >
                <img
                  src={item}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%] aspect-square relative rounded-md overflow-hidden border border-gray-300">
            <img
              className="object-cover w-full h-full"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          {/* Price Section */}
          <div className="mt-5 flex items-center gap-3">
            {productData.oldPrice && (
              <span className="text-gray-500 line-through text-lg">
                {currency}{productData.oldPrice}
              </span>
            )}
            <span className="text-3xl font-medium text-red-600">
              {currency}{productData.price}
            </span>
            {discount && (
              <span className="text-green-600 text-lg font-semibold">
                {discount}% OFF
              </span>
            )}
          </div>

          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Model Selection */}
          {productData.models && productData.models.length > 0 && (
            <div className="my-4">
              <label htmlFor="model-select" className="block mb-2 font-semibold">Select Model</label>
              <select
                id="model-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="border border-purple-500 px-4 py-2 rounded-md w-30"
              >
                <option value="" disabled>Select Model...</option>
                {productData.models.map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
            </div>
          )}

          {/* Color Selection */}
        {/*  {productData.colors && productData.colors.length > 0 && (
            <div className="my-4">
              <p className="block mb-2 font-semibold">Select Color</p>
              <div className="flex gap-2 flex-wrap">
                {productData.colors.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border ${selectedColor === color ? 'bg-black text-white' : 'bg-gray-100'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )} */}

          {/* Add to Cart */}
              <button
           onClick={() => addToCart(productData._id, selectedModel, selectedColor)}
           disabled={!selectedModel} // only model is required
          className={`bg-black text-white px-8 py-3 text-sm mt-4 ${!selectedModel ? 'opacity-50 cursor-not-allowed' : 'active:bg-gray-700'}`}
            >
           ADD TO CART
        </button>

          {/* Extra Info */}
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