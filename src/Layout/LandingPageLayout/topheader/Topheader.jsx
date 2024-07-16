import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronDownSharp } from "react-icons/io5";


const Topheader = () => {
  return (
    <section className="bg-black text-white text-sm">
        <div className="container py-3">
            <div className="container sm:flex items-center h-full">
                <div className="flex gap-3 items-center sm:w-3/4 justify-center">
                    <h3>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
                    <NavLink className="underline font-semibold">
                        ShopNow
                    </NavLink>
                </div>
                <div className='flex items-center justify-center sm:w-1/4 gap-2'>
                    <h3>English</h3>
                    <IoChevronDownSharp />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topheader