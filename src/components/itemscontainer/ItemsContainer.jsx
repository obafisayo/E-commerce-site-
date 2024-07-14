import React, { useRef, useState } from 'react';
import RoundButton from '../shared/roundbutton/RoundButton';
import Countdown from '../shared/countdown/Countdown';
import Productsbox from '../shared/productsbox/Productsbox';
import PrimaryButton from '../shared/primarybutton/PrimaryButton';
import Categorybox from '../shared/categorybox/Categorybox';

const ItemsContainer = ({config, categoryconfig, category, button, button1, productclass, scrollingdiv, scrollbutton, countdwn, title, subtitle}) => {
  const containerRef = useRef(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 280;
    }
  }
  
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 280;
    }
  }
  const [clickedstate, setClickedstate] = useState(() => {
    if (categoryconfig) {
      let clickarray = new Array(categoryconfig.length).fill(false)
      clickarray.splice(0, 1, true)
      return clickarray
    } else {
      return []
    }
  });

  const handleClick = (index) => {
    setClickedstate(clickedstate.fill(false))
    setClickedstate((prevStates) => prevStates.map((state, idx) => idx === index ? !state : state));
  };
  return (
    <div className="flex items-center flex-col gap-10">
      <div className="flex w-full flex-col gap-10 max-sm:gap-0">
        <div className="w-full h-[103px] flex max-sm:flex-col max-sm:gap-3 max-sm:h-fit">
          <div className="lg:w-1/2 max-sm:w-full flex max-sm:flex-col max-sm:gap-4">
            <div className={`${countdwn? "w-2/5" : "w-full"} max-sm:w-full flex-col flex justify-between`}>
              <div className="flex items-center gap-3 text-brandRed">
                <span className="bg-brandRed px-2 py-4 rounded-sm"></span>
                <h1 className="font-semibold">{title}</h1>
              </div>
              <div className="font-bold text-4xl">
                <h1>{subtitle}</h1>
              </div>
            </div>
            {countdwn && <div className="w-3/5 max-sm:w-full flex items-end justify-end">
              <Countdown numberOfDays={4} />
            </div>}
          </div>
          <div className="w-1/4 lg:w-1/2 max-sm:w-full max-sm:pr-2 flex items-end justify-end">
            {scrollbutton && <div className="w-24 h-11 flex justify-between items-center">
              <RoundButton left handler={handleScrollLeft} />
              <RoundButton right handler={handleScrollRight} />
            </div>}
            {button1 && <PrimaryButton bgColor={"bg-brandRed"}
              text={"View All"}
              textColor={'text-white'}
              to={"/#"}
            />}
          </div>
        </div>
        <div className={`w-full ${productclass} products-container`} ref={containerRef}>
          {category && Array.isArray(categoryconfig)? <div className="flex items-center justify-between gap-2">
            {categoryconfig.map((item, index) => (
              <Categorybox key={index}
                clickedclass={clickedstate[index]}
                handler={() => handleClick(index)}
                icon={item.icon} name={item.name}
              />
            ))}
          </div>
          : 
          <div>
            {config && Array.isArray(config) && (
              <div className={`inline-flex gap-4 ${scrollingdiv? "" : "sm:flex-wrap"}`}>
                {config.map((data, index) => (
                  <Productsbox key={index}
                    id={data.id}
                    discount={data.discount}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    rating={data.starRating}
                    slashprice={data.slashprice}
                  />
                ))}
              </div>
            )}
          </div>}
        </div>
      </div>
      {button && <PrimaryButton bgColor={"bg-brandRed"}
        text={"View All Products"}
        textColor={'text-white'}
        to={"/#"}
      />}
    </div>
  )
}

export default ItemsContainer;