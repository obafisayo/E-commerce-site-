import React from 'react'
import Nav from '../nav/Nav'
import Searchbar from '../../../components/searchbar/Searchbar'
import Hamburger from '../../../components/hamburger/Hamburger';

const Header = () => {
  return (
    <section className="border-b-2 bg-white">
        <div className="container py-2">
            <div className="flex h-14 items-center justify-between">
                <div className="w-4/6 max-md:w-2/6">
                    <Nav />
                </div>
                <div className="w-2/6 max-md:w-4/6 max-sm:w-3/6 flex items-center justify-between">
                    <Searchbar />
                    <Hamburger />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header