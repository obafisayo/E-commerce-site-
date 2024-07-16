import React, { useState } from 'react';
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';
// import { FiAlignRight } from "react-icons/fi";
// <FiAlignRight />


const ItemSlider = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Slider {...settings}>
      {config.map((data, index) => (
        <div className="w-full relative" key={data.id}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center items-start gap-8
                sm:pl-16 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                relative z-40 pb-12 sm:pb-2 pl-10">
                <div className="flex items-center justify-between gap-3 sm:gap-6">
                    {data.icon}
                    <h1 className="text-3xl sm:text-lg lg:text-lg font-normal">{data.subtitle}</h1>
                </div>
                <h1 className="text-xl sm:text-4xl lg:text-5xl font-medium">{data.title}</h1>
                <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                        <NavLink to={"/#"}>
                            Shop Now
                        </NavLink>
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white"
                        />
                    </div>
                    <GoArrowRight size={24} />
                </div>
            </div>
            <div className="order-1 sm:order-2">
              <div>
                <img
                  src={data.img}
                  alt=""
                  className="w-[300px] h-[300px] sm:w-[450px] sm:h-[344px] 
                    sm:scale-105 lg:scale-120 object-contain mx-auto 
                    drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-20 p-5"
                />
              </div>
            </div>
          </div>
          <div className="absolute z-30 w-full h-24 bg-gradient-to-t 
            from-black to-black/90 bottom-0 blur-md">
          </div>
          <div className="flex items-center justify-center">
            <div className="absolute bottom-10 z-50 flex items-center justify-center gap-4">
              {config.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full p-1 text-white outline ${
                    index === currentSlide ? 'bg-brandRed' : ''
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ItemSlider;