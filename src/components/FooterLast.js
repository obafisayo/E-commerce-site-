import React from 'react';
import { FaTelegram } from 'react-icons/fa';

const FooterLast = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-8 mt-8 bg-black text-white pb-10 pt-10 justify-center'>
      <div className='flex flex-col gap-3 w-full md:w-auto'>
        <h2 className='font-semibold'>EXCLUSIVE</h2>
        <h3>Subscribe</h3>
        <p className='font-thin'>Get 10% off your first order</p>
        <div className='flex'>
          <input className='border-2 bg-black h-10 rounded-sm p-2 w-full md:w-auto' placeholder='Enter email' />
          <button className='ml-2 flex items-center justify-center bg-blue-500 text-white p-2 rounded'>
            <FaTelegram />
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2 list-none w-full md:w-auto'>
        <h3>Support</h3>
        <li className='font-thin'>11 Bijoy, Sarani Dhaka <br />DH 1515, Bangladash</li>
        <li className='font-thin'>exclusive@gmail.com</li>
        <li className='font-thin'>+8805-770965-8889</li>
      </div>
      <div className='flex flex-col gap-2 list-none w-full md:w-auto'>
        <h3>Account</h3>
        <li className='font-thin'>My Account</li>
        <li className='font-thin'>Login/Register</li>
        <li className='font-thin'>Cart</li>
        <li className='font-thin'>Wishlist</li>
        <li className='font-thin'>Shop</li>
      </div>
      <div className='flex flex-col gap-2 list-none w-full md:w-auto'>
        <h3>Quick Link</h3>
        <li className='font-thin'>Privacy Policy</li>
        <li className='font-thin'>Terms Of Use</li>
        <li className='font-thin'>FAQ</li>
        <li className='font-thin'>Contact</li>
      </div>
      <div className='flex flex-col gap-3 w-full md:w-auto'>
        <h3>Download App</h3>
        <p className='font-thin'>Save $3 with new user only</p>
        <div>
          <img src='' alt='Appear' className='mb-2' />
          <div className='flex gap-2'>
            <img src='' alt='Google Play' />
            <img src='' alt='Google Play' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLast;
