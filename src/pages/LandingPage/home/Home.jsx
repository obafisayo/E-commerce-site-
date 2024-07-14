import React from 'react'
import Herosection from './herosection/Herosection'
import ProductSection1 from './productsection1/ProductSection1'
import ProductSection2 from './productsection1/productsection2'
import ProductSection3 from './productsection1/productsection3'
import Categories from './categories/Categories'
import NextHero from '../../../components/NextHero/NextHero'

const Home = () => {
  return(
    <main>
    <div>
        <Herosection />
        <ProductSection1 />
        <Categories />
        <ProductSection2 />
        <div className='container'>
        <NextHero />
        </div>
        
        <ProductSection3 />
      </div>
    </main>
    )
}

export default Home