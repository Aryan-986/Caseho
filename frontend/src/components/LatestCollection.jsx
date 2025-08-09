import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  const [sortOrder, setSortOrder] = useState("default")

  useEffect(() => {
    let sortedProducts = [...products.slice(0, 10)]

    if (sortOrder === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortOrder === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price)
    }

    setLatestProducts(sortedProducts)
  }, [products, sortOrder])

  return (
    <div className='my-2'>
      {/* Heading */}
      <div className='text-center py-7'>
        <Title text1={'NEW'} text2={'ARRIVALS'} />
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-7 px-2 sm:px-0">
        <select
          className="border border-gray-300 text-sm p-2 rounded w-auto focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8">
      <Link
  to="/collection"
  className="inline-block px-2 py-1 border border-black text-black font-semibold rounded hover:bg-gray-700 hover:text-white transition"
>
  Show More
</Link>

      </div>
    </div>
  )
}

export default LatestCollection
