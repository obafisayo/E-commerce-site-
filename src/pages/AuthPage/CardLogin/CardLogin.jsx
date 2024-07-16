import React from 'react';
import Prod1 from '../../../assets/img/Prod.png';
import { useNavigate } from 'react-router-dom';


const CardLogin = () => {

    const navigate = useNavigate();
    const handleForgetPassword = () => {
        navigate('/account/forgot-password');
    }
  return (
    <section>
           <div className='container rounded-lg p-8 m-4 h-[900px]'>
            <div className='flex flex-row item-center justify-center items-center gap-[3rem]'>
                <div className=' w-[800px] h-[781px]'>
                    <img src={Prod1} alt="" />
                </div>
                <div className=' w-[370px] h-[571px] pl-9 '>
                    <h1 className='font-semibold text-2xl tracking-wider'>Login in to Exclusive</h1>
                    <p className='font-semibold text-sm pt-3 pb-4'>Enter your details below</p>
                    <div>
                    <form class="space-y-4">
        <input type="email" placeholder="Email or Phone Number" className="w-full border-b-2 border-gray-300 focus:border-[#DB4444] focus:outline-none py-2 px-4 my-4" />
        <input type="password" placeholder="Password" className="w-full border-b-2 pb-2 border-gray-300 focus:border-[#DB4444] focus:outline-none py-2 px-4" />
        <div className='flex flex-row items-center justify-between'>
        <button className="bg-[#DB4444] text-white font-semibold text-sm rounded-sm px-[40px] py-3 my-12 hover:py-4 transiton ease-in 1s">Login</button>
        <span onClick={handleForgetPassword} style={{cursor: 'pointer', color: '#DB4444'}}>Forget Password</span>
        </div>
    </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CardLogin