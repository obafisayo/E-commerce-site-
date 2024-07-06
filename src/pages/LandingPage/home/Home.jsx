import React from 'react'
import Herosection from './herosection/Herosection'

const Home = () => {
  return (
    <main>
      <div className="container">
        <Herosection />
        <div className="bg-fuchsia-400 h-[400px] flex items-center
          text-center text-white font-semibold">
          <h1 className="text-xl">This is the Home page</h1>
        </div>
      </div>
    </main>
    )
}

export default Home