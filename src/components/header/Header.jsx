import React, { useContext } from 'react'
import Nav from '../../components/header/nav/Nav'
import Searchbar from '../../components/searchbar/Searchbar'
import Hamburger from '../../components/hamburger/Hamburger';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { CART, WISHLIST } from '../../routes/RouteConstants';
import { WishContext } from '../../contexts/wishcontext';
import { CartContext } from '../../contexts/cartcontext';

const Header = ({wishNcart}) => {
    const { noOfWishItems } = useContext(WishContext);
    const { noOfCartItems } = useContext(CartContext);
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
                            <NavLink to={WISHLIST}>
                                <div className="relative">
                                    <CiHeart size={24}/>
                                    {noOfWishItems > 0 && <div className="absolute -top-1 -right-1 rounded-[100%] bg-red-500 w-4 flex justify-center">
                                        <h1 className="text-xs text-white">{noOfWishItems}</h1>
                                    </div>}
                                </div>
                            </NavLink>
                            <NavLink to={CART}>
                                <div className="relative">
                                    <IoCartOutline size={24}/>
                                    {noOfCartItems > 0 && <div className="absolute -top-1 -right-1 rounded-[100%] bg-red-500 w-4 flex justify-center">
                                        <h1 className="text-xs text-white">{noOfCartItems}</h1>
                                    </div>}
                                </div>
                            </NavLink>
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