import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { ABOUT, CONTACT, HOME, SIGNUP } from '../../../routes/RouteConstants';

const Navlinks = [
  {
    name: "Home",
    link: HOME
  },
  {
    name: "Contact",
    link: CONTACT
  },
  {
    name: "About",
    link: ABOUT
  },
  {
    name: "Sign Up",
    link: SIGNUP
  },
];

const Nav = () => {
  const [hoverStates, setHoverStates] = useState(new Array(Navlinks.length).fill(false));
  const location = useLocation();

  React.useEffect(() => {
    const currentIndex = Navlinks.findIndex((nav) => nav.link === location.pathname);
    if (currentIndex !== -1) {
      setHoverStates((prevStates) => prevStates.map((state, idx) => idx === currentIndex));
    }
  }, [location]);

  const handleClick = (index) => {
    setHoverStates(hoverStates.fill(false))
    setHoverStates((prevStates) => prevStates.map((state, idx) => idx === index ? !state : state));
  };

  return (
    <div className="container flex item-center justify-between gap-7">
        <div className="flex items-center justify-center">
            <NavLink to={HOME}>
                <h1 className="font-bold text-2xl">
                    Exclusive
                </h1>
            </NavLink>
        </div>
        <div className="w-9/12 items-center flex max-md:hidden max-md:w-1/12">
            <ul className="inline-flex gap-10 max-lg:gap-6">
            {Navlinks.map((nav, index) => (
                <li key={index}
                  className={`font-medium relative`}
                  onClick={() => handleClick(index)}
                >
                  <NavLink to={nav.link}>
                      {nav.name}
                  </NavLink>
                  <span
                      className={`absolute left-0 bottom-0 
                        ${hoverStates[index] ? 'w-full' : 'w-1'} 
                        h-[1px] transition duration-300
                        ${hoverStates[index] ? "bg-black" : "bg-transparent"}
                      `}
                  />
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Nav;