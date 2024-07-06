import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Hamburger = () => {
  return (
    <div className="relative hidden max-md:flex">
        <div className="">
            <RxHamburgerMenu size={24} />
        </div>
        <div className="absolute hidden">
            <IoCloseOutline size={24} />
        </div>
    </div>
  )
}

export default Hamburger