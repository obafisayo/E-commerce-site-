import React from 'react';
import HeroNav from './heronav/HeroNav';
import ItemSlider from '../../../../components/slider/Slider';
import { HeroConfig } from './heroConfig';

const Herosection = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="flex gap-10">
          <div className="w-52 border-r-2 hidden lg:block">
            <HeroNav />
          </div>
          <div className="w-full overflow-hidden lg:h-[344px] 
            mt-10 max-lg:rounded-3xl"
          >
            <div className="bg-black text-white">
              <ItemSlider config={HeroConfig} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;