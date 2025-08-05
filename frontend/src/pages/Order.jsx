import React, { useState, useEffect, useContext } from 'react'
import Title from '../components/Title'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

function Order() {
    const [orderData, setOrderData] = useState([])
    const { currency } = useContext(shopDataContext)
    const { serverUrl } = useContext(authDataContext)

    const loadOrderData = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/userorder', {}, { withCredentials: true })
            if (result.data) {
                let allOrdersItem = []
                result.data.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['paymentOrder'] = order.paymentOrder
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [])

    return (
        <div className='w-full min-h-screen px-5 md:px-12 py-20 bg-gradient-to-br from-[#0c2025] to-[#141414] overflow-hidden'>
            <div className='text-center mb-12'>
                <Title text1={'MY'} text2={'ORDER'} />
            </div>

            <div className='flex flex-col gap-6'>
                {orderData.map((item, index) => (
                    <div
                        key={index}
                        className='relative flex items-center gap-6 p-4 md:p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg 
                                   rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'
                    >
                        <img
                            src={item.image1}
                            alt={item.name}
                            className='w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-lg object-cover border border-white/20 shadow'
                        />

                        <div className='flex flex-col justify-between w-full text-white gap-2 relative'>
                            <h2 className='text-lg md:text-2xl font-semibold text-[#f3f9fc]'>{item.name}</h2>

                            <div className='flex flex-wrap gap-4 text-xs md:text-sm text-[#aaf4e7]'>
                                <span>{currency} {item.price}</span>
                                <span>Quantity: {item.quantity}</span>
                                <span>Size: {item.size}</span>
                            </div>

                            <p className='text-xs md:text-sm text-[#aaf4e7]'>
                                Date: <span className='text-[#e4fbff] pl-2'>{new Date(item.date).toDateString()}</span>
                            </p>

                            <p className='text-xs md:text-sm text-[#aaf4e7]'>
                                Payment Method: {item.paymentMethod}
                            </p>

                            {/* Status Badge */}
                            <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%] flex items-center gap-2'>
                                <span className={`w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                <p className='md:text-[17px] text-[10px] text-[#f3f9fc]'>{item.status}</p>
                            </div>

                            {/* Track Order Button */}
                            <div className='absolute md:right-[5%] right-[1%] md:top-[40px] top-[70px]'>
                                <button
                                    onClick={loadOrderData}
                                    className='px-3 md:px-5 py-1.5 md:py-2 rounded-md bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
                                               text-white text-xs md:text-sm font-medium shadow-md transition-all duration-300 
                                               hover:shadow-lg hover:scale-105 active:scale-95'
                                >
                                    Track Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order
