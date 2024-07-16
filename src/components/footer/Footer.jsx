import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import Qrcode from '../../assets/img/QRcode.webp';
import Appstore from '../../assets/img/Appstore.png';

const Footer = () => {
  return (
    <section className="bg-black text-white mt-8 text-lg">
      <div className='container py-10'>
        <div className="container flex flex-wrap md:flex-row gap-12 justify-between">
          <div className='flex flex-col gap-3 w-full md:w-auto'>
            <h2 className='font-bold text-xl'>EXCLUSIVE</h2>
            <h3 className="font-semibold">Subscribe</h3>
            <p className='font-thin text-sm'>Get 10% off your first order</p>
            <div className='flex'>
              <input className='text-sm border-2 bg-black h-10 rounded-sm p-2 w-full sm:w-96 md:w-auto' placeholder='Enter email' />
              <button className='ml-2 flex items-center justify-center bg-blue-500 text-white p-2 rounded'>
                <FaTelegram />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-2 list-none'>
            <h3 className="font-semibold">Support</h3>
            <li className='font-thin text-sm'>11 Bijoy, Sarani Dhaka <br />DH 1515, Bangladash</li>
            <li className='font-thin text-sm'>exclusive@gmail.com</li>
            <li className='font-thin text-sm'>+8805-770965-8889</li>
          </div>
          <div className='flex flex-col gap-2 list-none'>
            <h3 className="font-semibold ">Account</h3>
            <li className='font-thin text-sm'>My Account</li>
            <li className='font-thin text-sm'>Login/Register</li>
            <li className='font-thin text-sm'>Cart</li>
            <li className='font-thin text-sm'>Wishlist</li>
            <li className='font-thin text-sm'>Shop</li>
          </div>
          <div className='flex flex-col gap-2 list-none'>
            <h3 className="font-semibold">Quick Link</h3>
            <li className='font-thin text-sm'>Privacy Policy</li>
            <li className='font-thin text-sm'>Terms Of Use</li>
            <li className='font-thin text-sm'>FAQ</li>
            <li className='font-thin text-sm'>Contact</li>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className="font-semibold">Download App</h3>
            <p className='font-thin text-sm'>Save $3 with new user only</p>
            <div className='flex flex-row gap-2'>
              <img src={ Qrcode } alt='Appear' className='mb-2 size-20' />
              <div className='flex flex-col items-center gap-2'>
                <img src={Appstore} alt='Google Play' />
                <img src={Appstore} alt='Google Play' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
