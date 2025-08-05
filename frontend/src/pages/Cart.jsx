import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title.jsx'
import { shopDataContext } from '../context/ShopContext.jsx'
import { useNavigate } from 'react-router-dom'
import { ImBin } from "react-icons/im";
import CartTotal from '../components/CartTotal.jsx';

function Cart() {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  return (
    <div className='w-[100vw] min-h-[100vh] p-5 overflow-hidden 
      bg-gradient-to-br from-[#0c2025] via-[#132d35] to-[#141414]'>

      <div className='text-center mt-20 mb-10'>
        <Title text1={'YOUR'} text2={'CART'} />
        <p className='text-gray-300 text-sm md:text-base mt-2 tracking-wider'>
          Review your items before checkout
        </p>
      </div>
      <div className='flex flex-col gap-6 w-full max-w-5xl mx-auto'>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='relative bg-[#5180802f] backdrop-blur-md border border-[#9ff9f920] 
                shadow-lg rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center 
                gap-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#9ff9f940]'>
                <img className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl object-cover 
                  border border-[#9ff9f940] shadow-md' 
                  src={productData.image1} alt={productData.name} />
                <div className='flex flex-col items-start gap-2 w-full md:w-[40%]'>
                  <p className='text-[white] md:text-[22px] text-[18px] font-semibold'>
                    {productData.name}
                  </p>
                  <div className='flex items-center gap-4'>
                    <p className='text-[18px] text-[#aaf4e7] font-medium'>
                      {currency} {productData.price}
                    </p>
                    <p className='w-[40px] h-[40px] text-white bg-[#518080b4] 
                      rounded-md flex items-center justify-center 
                      border border-[#9ff9f9] text-[16px]'>
                      {item.size}
                    </p>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className='max-w-16 px-2 py-1 md:px-3 md:py-2 text-white 
                    text-[18px] font-semibold bg-[#518080b4] border border-[#9ff9f9] 
                    rounded-md focus:outline-none focus:ring-2 focus:ring-[#9ff9f9] transition-all'
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                />
                <ImBin
                  className='text-[#9ff9f9] w-[25px] h-[25px] absolute top-4 right-4 
                    cursor-pointer transition-all hover:scale-125 hover:text-red-400'
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            )
          })
        }
      </div>

<div className='flex justify-start items-end my-20'>
  <div className='w-full sm:w-[450px]'>

    <CartTotal/>

    <button
      className='relative overflow-hidden text-[18px] cursor-pointer mt-6 ml-[30px] 
        py-[12px] px-[50px] rounded-2xl text-white font-semibold
        border border-[#9ff9f960] shadow-md shadow-[#4d889040]
        bg-gradient-to-r from-[#4d8890]/50 to-[#0c2025]/60 backdrop-blur-sm
        transition-all duration-300 
        hover:scale-[1.03] hover:shadow-[#9ff9f950]'
      
      onClick={() => {
        if(cartData.length > 0){
          navigate("/placeorder")
        } else {
          console.log("Your Cart is Empty!")
        }
      }}
    >
      <span className='relative z-10 tracking-wide'>PROCEED TO CHECKOUT</span>
      <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r 
        from-transparent via-white/20 to-transparent 
        translate-x-[-100%] hover:translate-x-[100%] 
        transition-transform duration-700 ease-out rounded-2xl'>
      </span>
    </button>

  </div>
</div>




    </div>
  )
}

export default Cart
