import React, { useRef } from 'react';
import RoundButton from '../shared/roundbutton/RoundButton';
import Countdown from '../shared/countdown/Countdown';
import PrimaryButton from '../shared/primarybutton/PrimaryButton';

const ItemsContainer = ({children, button, button1, button2, productclass, scrollbutton, countdwn, title, subtitle}) => {
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
  
  return (
    <div className="flex items-center flex-col gap-10">
      <div className="flex w-full flex-col gap-10 max-sm:gap-0">
        <div className="w-full flex max-sm:flex-col max-sm:gap-3 max-sm:h-fit">
          <div className="lg:w-1/2 max-sm:w-full flex max-sm:flex-col max-sm:gap-4">
            <div className={`${countdwn? "w-2/5" : "w-full"} max-sm:w-full flex-col flex gap-5 justify-between`}>
              {title && <div className="flex items-center gap-3 text-brandRed">
                <span className="bg-brandRed px-2 py-4 rounded-sm"></span>
                <h1 className="font-semibold">{title}</h1>
              </div>}
              {subtitle && <div className="font-bold text-4xl">
                <h1>{subtitle}</h1>
              </div>}
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
            {button2 && <PrimaryButton bgColor={"transparent"}
              text={button2}
              border={"border-2"}
              textColor={'text-black font-medium'}
              to={"/#"}
            />}
          </div>
        </div>
        <div className={`w-full ${productclass} products-container`} ref={containerRef}>
          {children}
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