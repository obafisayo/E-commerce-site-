import React from 'react';
import Rectangle1 from '../../img/Rectangle 17.png';
import Frame1 from '../../img/Frame1.png';
import Frame2 from '../../img/Frame2.png';
import Frame3 from '../../img/Frame3.png';
import Frame4 from '../../img/Frame4.png';

const Featured = () => {
  return (
    <div className='container'>
        <div className='container flex flex-col gap-[2rem]'>
      <div className='flex flex-row gap-4 items-center'>
        <img src={Rectangle1} alt="Featured Rectangle"/>
        <p className='text-[#DB4444] font-semibold'>Featured</p>
      </div>
      <h1 className='text-2xl font-semibold'>New Arrival</h1>
      <div className='flex flex-row gap-[5rem]'>
        <img src={Frame1} alt="" className=' size-[600px]'/>
        <div className='flex flex-col gap-8'>
          <img src={Frame2} alt="" />
          <div className='flex flex-row gap-6'>
              <img src={Frame3} alt="" />
              <img src={Frame4} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Featured;
