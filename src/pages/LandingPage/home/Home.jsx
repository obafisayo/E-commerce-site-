import React from 'react'
import Herosection from './herosection/Herosection'
import ProductSection1 from './productsection1/ProductSection1'
import ProductSection2 from './productsection1/productsection2'
import ProductSection3 from './productsection1/productsection3'
import Categories from './categories/Categories'
import NextHero from '../../../components/NextHero/NextHero';
import Featured from '../../../components/Featured/Featured'
import Services from './services/Services'

const Home = () => {
  return(
    <main>
      <Herosection />
      <ProductSection1 />
      <Categories />
      <ProductSection2 />
      <NextHero />
      <ProductSection3 />
      <Featured />
      <Services />
    </main>
  )
}

export default Home