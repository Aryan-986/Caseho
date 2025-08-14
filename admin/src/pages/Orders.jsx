import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl, currency } from '../App'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteHandler = async (orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/delete',
        { orderId },
        { headers: { token } }
      )
      if (response.data.success) {
        toast.success(response.data.message)
        fetchAllOrders()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="p-5">
      <h3 className="text-2xl font-semibold mb-4">Admin Orders</h3>
      <div className="flex flex-col gap-4">
        {orders.map((order, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border p-4 rounded-md"
          >
            {/* Placeholder icon or first product image */}
            <img
              className="w-12 h-12 object-cover rounded-md"
              src={order.items[0]?.image[0] || 'https://via.placeholder.com/50'}
              alt={order.items[0]?.name || 'Product'}
            />

            {/* Product details */}
            <div className="flex flex-col gap-1">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded-sm"
                  />
                  <span>
                    {item.name} x {item.quantity} 
                    {item.color && <span> | Color: {item.color}</span>}
                  </span>
                </div>
              ))}

              <p className="mt-2 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-gray-500 text-sm">
                {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
              </p>
              <p className="text-gray-500 text-sm">{order.address.phone}</p>
            </div>

            {/* Order info */}
            <div className="flex flex-col gap-1 text-sm">
              <p>Items: {order.items.length}</p>
              <p>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Total amount */}
            <p className="text-sm font-medium">{currency}{order.amount}</p>

            {/* Status select & delete */}
            <div className="flex flex-col gap-2">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="p-2 font-semibold border rounded"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>

              {order.status === "Delivered" && (
                <button
                  onClick={() => deleteHandler(order._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
