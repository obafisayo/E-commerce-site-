import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaMusic  } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <div className="flex flex-row gap-x-28 justify-center mt-10">
      <div className='flex flex-col gap-1 items-center'>
        <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'> <FaBeer className='text-2xl bg-black text-white' /></div>
        <h2 className="font-semibold">FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
      <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'> <FaMusic className='text-2xl ' /></div>
        <h2 className="font-semibold">24/7 CUSTOMER SERVICE</h2>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'> < FaCheckSquare className='text-2xl' /></div>
        <h2 className="font-semibold">MONEY BACK GUARANTEE</h2>
        <p>We return money within 30days</p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
      
      <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'>< FaCheckSquare className='text-2xl'/></div>
        <h2  className="font-semibold">MONEY BACK GUARANTEE</h2>
        <p>We return money within 30days</p>
      </div>
    </div>
  )
}

export default MyFooter;