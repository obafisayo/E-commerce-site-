import React from 'react';
import Topheader from '../../Layout/LandingPageLayout/topheader/Topheader';
import Nav from '../../Layout/LandingPageLayout/nav/Nav';
import Search from '../AuthPage/Search/Search';
import Card from '../AuthPage/Card/Card';


const NotFound = () => {
  return (
    <section>
      <div>
        <Topheader />
      <div className='flex flex-row h-14 items-center gap-0 mt-[1rem]'>
        <Nav /> 
        <Search />
      </div>
      <Card />
    </div>
    </section>

  )
}

export default NotFound