import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaMusic  } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <div className='container flex flex-col gap-4 mt-16 mb-16'>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-28 justify-center mt-10">
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'> 
            <FaBeer className='text-2xl bg-black text-white' />
          </div>
          <h2 className="font-semibold text-center">FREE AND FAST DELIVERY</h2>
          <p className="text-center">Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-20 h-20 border-8 rounded-full flex items-center justify-center'> 
            <FaMusic className='text-2xl' />
          </div>
          <h2 className="font-semibold text-center">24/7 CUSTOMER SERVICE</h2>
          <p className="text-center">Friendly 24/7 customer support</p>
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
      <div className='bg-[#F5F5F5] w-6 h-6 rounded-full flex items-center justify-center ml-auto mr-2 sm:mr-10'>
        <FaArrowUp />
      </div>
    </div>
  );
}

export default MyFooter;
