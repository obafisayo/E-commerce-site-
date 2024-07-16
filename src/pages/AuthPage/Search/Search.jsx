import React from 'react';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="w-1/4 max-md:w-2/4 flex items-center lg:gap-5 gap-1">
        <div className="relative group hidden sm:block text-sm mr-28">
            <input type="text" placeholder="what are you looking for?"
                className="
                    search-bar
                "
            />
            <CiSearch size={24} className="
                absolute right-3 top-2 group-hover:text-gray-400 text-black
            " />
        </div>
    </div>
  )
}

export default Search;