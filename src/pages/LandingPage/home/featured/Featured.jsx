import React from 'react';
import { FeaturedConfig } from './featuredconfig';
import ItemsContainer from '../../../../components/itemscontainer/ItemsContainer';
import ShopButton from '../../../../components/shared/shopbutton/ShopButton';

const Featured = () => {
  return (
    <section>
      <div className="container mb-20 mt-14">
        <ItemsContainer
          productclass={"featured"}
          title={"Featured"}
          subtitle={"New Arrival"}
        >
          {Array.isArray(FeaturedConfig) && (
            <div className="inline-flex lg:grid grid-flow-col grid-rows-2 grid-cols-4 h-[300px] gap-8 lg:h-[600px]">
              {FeaturedConfig.map((data, index) => (
                <div key={index} className={`relative lg:w-full w-72
                  ${index === 0? "col-start-1 row-start-1 row-span-2 col-span-2"
                    :
                    index === 1? "row-start-1 col-start-3 col-span-2" : ""
                  }`}>
                  <img src={data.img} alt="" className="h-full w-full"/>
                  <div className="w-[250px] text-wrap pl-8 pb-8 absolute bottom-0 flex flex-col gap-2 text-white">
                    <h1 className={`font-semibold ${index === 1? "w-[120%]" : ""} text-2xl`}>
                      {data.title}
                    </h1>
                    <p className="text-sm text-white/80">{data.subtitle}</p>
                    <ShopButton />
                  </div>
                </div>
              ))}
            </div>
          )}
        </ItemsContainer>
      </div>
    </section>
  );
}

export default Featured;
