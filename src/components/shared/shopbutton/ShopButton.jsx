import React from 'react'
import { NavLink } from 'react-router-dom'

const ShopButton = () => {
  return (
    <div className="relative w-fit">
        <NavLink to={"/#"}>
        Shop Now
        </NavLink>
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white"
        />
    </div>
  )
}

export default ShopButton