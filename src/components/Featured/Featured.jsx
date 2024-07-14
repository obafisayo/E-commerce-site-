import React from 'react';
import Rectangle1 from '../../img/Rectangle 17.png';
import Frame1 from '../../img/Frame1.png';
import Frame2 from '../../img/Frame2.png';
import Frame3 from '../../img/Frame3.png';
import Frame4 from '../../img/Frame4.png';

const Featured = () => {
  return (
    <section className="mb-20 border-2 border-green-500">
      <div className="container">
        <div className="flex gap-10 flex-col">
          <div className="flex flex-col gap-5">
            <div className='flex flex-row gap-4 items-center'>
              <span className="bg-brandRed px-2 py-4 rounded-sm"></span>
              <p className='text-brandRed font-semibold'>Featured</p>
            </div>
            <h1 className='text-2xl font-semibold'>New Arrival</h1>
          </div>
          <div className='flex gap-5 border-2 border-red-700'>
            <div classname="h-[600px]">
              {/* <img src={Frame1} alt="" className=''/> */}
            </div>
            <div className='flex flex-col items-center justify-between'>
              {/* <img src={Frame2} alt="" /> */}
              <div className='flex'>
                  {/* <img src={Frame3} alt="" /> */}
                  {/* <img src={Frame4} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Featured;
