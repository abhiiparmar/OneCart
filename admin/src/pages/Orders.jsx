import React, { useState, useEffect, useContext } from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';
import { SiEbox } from "react-icons/si";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { serverUrl } = useContext(authDataContext);

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(serverUrl + '/api/order/list', {}, { withCredentials: true });
      setOrders(result.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(serverUrl + '/api/order/status', { orderId, status: e.target.value }, { withCredentials: true });
      if (result.data) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-x-hidden'>
      <Nav />
      <div className='w-full h-full flex items-start justify-start'>
        <Sidebar />
        <div className='lg:w-[85%] md:w-[70%] h-full lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] py-[50px] px-[20px]'>
          <h1 className='text-3xl md:text-5xl font-bold text-cyan-300 mb-[20px] border-b-[2px] border-cyan-400 w-fit pb-2'>
            All Orders List
          </h1>

          {orders.length === 0 && (
            <p className='text-gray-300 text-lg mt-10 animate-pulse'>No orders found...</p>
          )}

          {orders.map((order, index) => (
            <div
              key={index}
              className='w-[95%] bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 rounded-2xl shadow-lg shadow-black/40 p-5 flex lg:items-center items-start justify-between flex-col lg:flex-row gap-5 hover:scale-[1.01] transition-all duration-300'
            >
              <SiEbox className='w-[70px] h-[70px] text-black p-3 rounded-xl bg-white shadow-md' />

              <div className='flex-1'>
                <div className='flex flex-col gap-1 text-cyan-300 text-[16px] font-medium'>
                  {order.items.map((item, idx) => (
                    <p key={idx}>
                      {item.name.toUpperCase()} × {item.quantity}{' '}
                      <span className='text-gray-400'>{item.size}</span>
                      {idx !== order.items.length - 1 && ','}
                    </p>
                  ))}
                </div>

                <div className='text-[15px] text-green-100 mt-2 leading-5'>
                  <p>{order.address.firstName + " " + order.address.lastName}</p>
                  <p>{order.address.street + ", "}</p>
                  <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.pinCode}</p>
                  <p>{order.address.phone}</p>
                </div>
              </div>

              <div className='text-[15px] text-green-100 min-w-[150px]'>
                <p>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? '✅ Done' : '⌛ Pending'}</p>
                <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                <p className='text-[22px] font-bold text-yellow-300 mt-1'>₹ {order.amount}</p>
              </div>

              <select
                value={order.status}
                className='px-3 py-2 bg-slate-600 rounded-lg border border-cyan-400 text-white focus:outline-none hover:bg-slate-500 transition-all duration-300'
                onChange={(e) => statusHandler(e, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
