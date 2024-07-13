import React from 'react'
import Herosection from './herosection/Herosection'
import ProductSection1 from './productsection1/ProductSection1'
import ProductSection2 from './productsection1/productsection2'
import ProductSection3 from './productsection1/productsection3'
import Categories from './categories/Categories'

const Home = () => {
  return (
    <main>
      <div className="container">
        <Herosection />
        <ProductSection1 />
        <Categories />
        <ProductSection2 />
        <ProductSection3 />
      </div>
    </main>
    )
}

export default Home