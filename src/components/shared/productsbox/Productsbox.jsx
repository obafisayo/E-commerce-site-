import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from "react-icons/io5";


const Productsbox = ({image, discount, name, price, slashprice, rating}) => {
  return (
    <div className="h-[350px] w-[270px]">
      <div className="bg-secondary h-3/4 flex justify-center items-center relative">
        <div className="p-10">
          <img src={image} alt="product-img"/>
        </div>
        <div className="absolute top-3 left-3 bg-brandRed
        text-white py-1 px-3 rounded-md">{`${discount}%`}</div>
        <div className="absolute top-3 right-3 flex flex-col gap-4">
          <div className="p-1 rounded-full bg-white text-black z-20">
            <CiHeart size={24} /> 
          </div>
          <div className="p-1 rounded-full bg-white text-black">
            <IoEyeOutline size={24} />
          </div>
        </div>
      </div>
      <div className="h-1/4 flex justify-start items-end text-gray-500 font-medium">
        <div className="flex flex-col w-3/4">
          <div className="text-sm font-semibold text-black">{name}</div>
          <div className="flex gap-3">
            <h3 className="text-brandRed">{`$${price}`}</h3>
            <h3 className="line-through">{`$${slashprice}`}</h3>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
            </div>
            <h3>({rating*20})</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productsbox