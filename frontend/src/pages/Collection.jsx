import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
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
      case 'lowToHigh':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'highToLow':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  

  const applyFilter = () => {
    let productsCopy = products.slice();
  
    if (showSearch && search) {
      const searchTerm = search.toLowerCase();
  
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(searchTerm) ||
        (item.models && item.models.some(model => model.toLowerCase().includes(searchTerm)))
      );
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
    <div className="flex flex-col pt-32 border-t">
      {/* Header */}
      <div className='text-center py-7'>
        <Title text1={'All'} text2={'COLLECTIONS'} />
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-7 px-2 sm:px-0">
        <select
          className="border border-gray-300 text-sm p-2 rounded w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Map Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {currentProducts.map((item) => (
          <ProductItem
            key={item._id}
            name={item.name}
            id={item._id}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: Math.ceil(filterProducts.length / productsPerPage) }, (_, i) => (
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