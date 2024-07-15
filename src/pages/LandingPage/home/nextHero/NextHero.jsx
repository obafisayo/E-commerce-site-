import React from 'react';
import Logo1 from '../../../../assets/img/mp3.png';

const NextHero = () => {
  return (
    <div className='bg-black pb-8 sm:pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-center items-center pt-10 lg:gap-[12rem]'>
          <div className='flex flex-col gap-6 text-center lg:text-left'>
            <h4 className='text-[#00FF66] text-lg sm:text-xl'>Categories</h4>
            <div className="text-[28px] sm:text-[34px] text-white">
              <span>Enhance Your</span>
              <br />
              <span>Music Experience</span>
            </div>
            <div className='flex flex-row gap-3'>
              <div className="flex flex-col items-center justify-center bg-white text-sm rounded-full h-12 w-12 sm:h-16 sm:w-16">
                <span className='text-black'>23</span>
                <p className='text-black'>Hours</p>
              </div>
              <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-12 w-12 sm:h-16 sm:w-16'>
                <span className='text-black'>05</span>
                <p className='text-black'>Hours</p>
              </div>
              <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-12 w-12 sm:h-16 sm:w-16'>
                <span className='text-black'>59</span>
                <p className='text-black'>Hours</p>
              </div>
              <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-12 w-12 sm:h-16 sm:w-16'>
                <span className='text-black'>35</span>
                <p className='text-black'>Hours</p>
              </div>
            </div>
            <button className="bg-[#00FF66] border-2 border-black rounded-md p-1 w-[150px] h-12 sm:h-16">Buy Now!</button>
          </div>
          <img src={Logo1} alt="Mp3" className="w-36 h-24 sm:w-56 sm:h-40 mt-8 lg:mt-0 lg:w-72 lg:h-48 xl:w-96 xl:h-64" />
        </div>
      </div>
    </div>
  );
};

export default NextHero;
