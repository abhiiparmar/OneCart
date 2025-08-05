import React, { useContext } from 'react' 
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {

    const {currency, delivery_fee, getCartAmount} = useContext(shopDataContext)

  return (
    <div className='w-full lg:ml-[30px]'>
      <div className='text-xl py-[10px]'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className='flex flex-col gap-2 mt-4 text-sm 
        p-[30px] rounded-2xl bg-[#5180802f] backdrop-blur-md
        border border-[#4d8890] shadow-lg shadow-[#4d889040]
        hover:shadow-[#4d889070] transition-all duration-300'>
        <div className='flex justify-between text-white text-[18px] p-[10px]'>
          <p className='font-medium tracking-wide'>SubTotal</p>
          <p className='font-semibold text-[#aaf4e7]'>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className='border-[#4d8890]/40' />
        <div className='flex justify-between text-white text-[18px] p-[10px]'>
          <p className='font-medium tracking-wide'>Shipping Fee</p>
          <p className='font-semibold text-[#aaf4e7]'>{currency} {delivery_fee}</p>
        </div>
        <hr className='border-[#4d8890]/40' />
        <div className='flex justify-between text-white text-[20px] p-[10px] mt-2
          bg-gradient-to-r from-[#4d8890]/20 to-[#0c2025]/40 
          rounded-xl shadow-inner'>
          <b className='tracking-wide'>Total</b>
          <b className='text-[#9ff9f9] drop-shadow-lg'>
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>  
      </div>
    </div>
  )
}

export default CartTotal
