import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
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
  )
}

export default Searchbar