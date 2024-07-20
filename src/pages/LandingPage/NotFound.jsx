import React from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

  const navigate = useNavigate();
  const handleToHome = () => {
    navigate('/');
}
  return (
    <div className='container'>
        <div className='container flex flex-row items-center gap-'>
          <p className='mt-20 2 text-gray-400'>Home / </p>
          <Breadcrumb />
        </div>
        <div className='flex flex-col items-center justify-center mt-[4rem] gap-3'>
          <h1 className='text-[110px] font-medium'>404 Not Found</h1>
          <p className='text-[16px]'>Your visited page not found</p>
          <button className="bg-[#DB4444] px-4 py-2 rounded text-white mt-[1.9rem]" onClick={handleToHome}>
                     Back to home page
          </button>
        </div>
    </div>
  )
}

export default NotFound