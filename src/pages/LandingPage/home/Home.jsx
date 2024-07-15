import React from 'react'
import Herosection from './herosection/Herosection'
import ProductSection1 from './productsection1/ProductSection1'
import ProductSection2 from './productsection1/productsection2'
import ProductSection3 from './productsection1/productsection3'
import Categories from './categories/Categories'
import Services from './services/Services'
import NextHero from './nextHero/NextHero'
import Featured from './featured/Featured'

const Home = () => {
  return(
    <main>
      <div className="container">
        <Herosection />
        <ProductSection1 />
        <Categories />
        <ProductSection2 />
        <NextHero />
        <ProductSection3 />
        <Featured />
        <Services />
      </div>
    </main>
  )
}

export default Home