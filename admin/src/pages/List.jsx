import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const calculateDiscount = (price, oldPrice) => {
    if (!oldPrice) return null;
    const discount = ((oldPrice - price) / oldPrice) * 100;
    return discount.toFixed(2); // Keep two decimal places
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Products List</h2>
      <div className="flex flex-col gap-4">
        {list.map((item, index) => {
          const discount = calculateDiscount(item.price, item.oldPrice);

          return (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-3 p-3 border rounded-md shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mx-auto md:mx-0"
              />

              {/* Product Name */}
              <p className="font-medium text-gray-700 text-center md:text-left">{item.name}</p>

              {/* Price Section */}
              <div className="flex flex-col items-center md:items-start">
                <p className="text-red-600 font-semibold">
                  {currency}{item.price}
                </p>
                {item.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {currency}{item.oldPrice}{' '}
                    {discount && (
                      <span className="text-green-600 font-medium">({discount}% off)</span>
                    )}
                  </p>
                )}
              </div>

              {/* Bestseller */}
              <div className="text-center md:text-left">
                {item.bestseller && (
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Update Button */}
              <button
                onClick={() => navigate(`/update/${item._id}`)}
                className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                title="Update Product"
              >
                <FaEdit className="w-5 h-5" />
              </button>

              {/* Remove Button */}
              <button
                onClick={() => removeProduct(item._id)}
                className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                title="Remove Product"
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
