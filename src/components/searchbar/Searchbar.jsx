import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="w-1/4 max-md:w-2/4 flex items-center lg:gap-5 gap-1">
        <div className="relative group hidden sm:block text-sm">
            <input type="text" placeholder="what are you looking for?"
                className="
                    search-bar
                "
            />
            <CiSearch size={24} className="
                absolute right-3 top-2 group-hover:text-gray-400 text-black
            " />
        </div>
        <div className="flex items-center justify-between gap-4">
            <CiHeart size={24}/>
            <IoCartOutline size={24}/>
        </div>
    </div>
  )
}

export default Searchbar