import React from 'react'
import Herosection from './herosection/Herosection';
import NextHero from '../../../components/NextHero/NextHero';

const Home = () => {
  return (
    <main>
      <div className="container"> 
        <Herosection />
        <div className="bg-black h-[400px] text-white font-semibold">
          <NextHero />
        </div>
      </div>
    </main>
    )
}

export default Home