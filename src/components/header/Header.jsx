import React from 'react'
import Nav from '../../components/header/nav/Nav'
import Searchbar from '../../components/searchbar/Searchbar'
import Hamburger from '../../components/hamburger/Hamburger';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = ({wishNcart}) => {
  return (
    <section className="border-b-2 bg-white">
        <div className="container py-2">
            <div className="flex h-14 items-center justify-between">
                <div className="w-4/6 max-md:w-2/6">
                    <Nav />
                </div>
                <div className="w-2/6 max-md:w-4/6 max-sm:w-3/6 flex items-center justify-between">
                <div className="w-1/4 max-md:w-2/4 flex items-center lg:gap-5 gap-1">
                    <Searchbar />
                    {wishNcart && <div className="flex items-center justify-between gap-4">
                        <CiHeart size={24}/>
                        <IoCartOutline size={24}/>
                    </div>}
                </div>
                    <Hamburger />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header