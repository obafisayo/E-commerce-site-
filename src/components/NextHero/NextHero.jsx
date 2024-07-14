import React from 'react'
import Logo1 from '../.././img/mp3.png'

const NextHero = () => {
  return (
    <div className='container'>
        <div className='flex flex-row justify-center item-center pt-10 gap-[9rem]'>
          <div className='flex flex-col gap-6'>
              <h4 className='text-[#00FF66]'>Categories</h4>
              <div className="text-[34px]">
                <span>Enhance Your</span>
                <br />
                <span>Music Experience</span>
              </div>
              <div className='flex flex-row gap-3'>
                <div className = "flex flex-col items-center justify-center bg-white text-sm rounded-full h-16 w-16">
                  <span className='text-black'>23</span>
                  <p className='text-black'>Hours</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-16 w-16'>
                <span className='text-black'>05</span>
                <p className='text-black'>Hours</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-16 w-16'>
                <span className='text-black'>59</span>
                <p className='text-black'>Hours</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-white text-sm rounded-full h-16 w-16'>
                <span className='text-black'>35</span>
                <p className='text-black'>Hours</p>
                </div>
              </div>
              <button className="bg-[#00FF66] border-2 border-black rounded-md p-1 w-[150px] h-16">Buy Now!</button>
          </div>
          <img src={ Logo1} alt="Mp3" className="w-84 h-64" />
        </div>
        
        </div>
  )
}

export default NextHero;