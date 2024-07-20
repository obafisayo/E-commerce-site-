import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import SmallCard from './SmallCard/SmallCard';
import Call from '../../../assets/img/icons-phone.png';
import Write from '../../../assets/img/icons-mail.png';


const Contact = () => {
  return (
    <div className='container'>
        <div className='container flex flex-row items-center gap-'>
          <p className='mt-20 2 text-gray-400'>Home / </p>
          <Breadcrumb />
    </div>
    <div className='flex flex-row mt-[70px] gap-[2rem]'>
        <div className='w-[340px] h-[457px]'>
          <div className='mt-[30px] flex flex-col gap-3 ml-[40px] mr-[20px]'>
            <SmallCard text='Call To Us' image={Call} />
            <p className='text-[14px]'>We are available 24/7, 7 days a week</p>
            <p className='text-[14px]'>Phone : +2349023931025</p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <SmallCard text='Write To US' image={Write} />
            <p className='text-[14px]'>Fill out our form and we will contact within 24 hours</p>
            <p className='text-[14px]'>Email: customer@exclusive.com</p>
            <p className='text-[14px]'>Email: support@exclusive.com</p>
        </div>
          </div>
         
        <div className='w-[800px] h-[457px]'>
          <form>
              <div className='relative ml-[40px] mr-[40px] flex flex-col gap-6'>
                <div className='mt-[30px] flex flex-row gap-6'>
                <input type="text" placeholder='Your name *' className='bg-[#F5F5F5] w-[235px] h-[50px] border-none px-4' />
                <input type="text" placeholder='Email *' className='bg-[#F5F5F5] w-[235px] h-[50px] px-4'/>
                <input type="text" placeholder='Phone *' className='bg-[#F5F5F5] w-[235px] h-[50px] px-4' />
                </div>
                <div className="mb-4 bg-[#F5F5F5]">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 bg-[#F5F5F5] h-[207px] border-none text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                <button className="bg-[#DB4444] px-4 py-2 rounded text-white absolute right-0">
                     Send message
                </button>
                </div>
              </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Contact