import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 35;

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col pt-10 border-t">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
        {/* Product Sort */}
        <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      {/* Map Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {
          currentProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {Array(Math.ceil(filterProducts.length / productsPerPage)).fill(null).map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 py-1 px-2 ${currentPage === i + 1 ? 'bg-gray-300' : 'bg-gray-100'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Collection;
