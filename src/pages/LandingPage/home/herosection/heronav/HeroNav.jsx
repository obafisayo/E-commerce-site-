import React, { useState } from 'react'
import { HeroConfig1 } from '../heroConfig'
import { NavLink } from 'react-router-dom'
import { MdOutlineChevronRight } from "react-icons/md";


const HeroNav = () => {
    const [hoverStates, setHoverStates] = useState(Array(HeroConfig1.length).fill(false));

    const handleMouseEnter = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
    };

    const handleMouseLeave = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = false;
        setHoverStates(newHoverStates);
    };
    return (
        <div className="pt-6">
            <ul>
                {HeroConfig1.map((item, index) => (
                    <li
                        key={index}
                        className={`relative group my-4 last:mb-0`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <NavLink to={item.path} className="flex items-center justify-between">
                            <span>{item.name}</span>
                            {item.dropdown && (
                                <span className={`transition-transform duration-300 ${hoverStates[index] ? 'rotate-90' : ''}`}>
                                    <MdOutlineChevronRight />
                                </span>
                            )}
                        </NavLink>
                        {item.dropdown && (
                            <div className="absolute z-50 bg-white p-5 shadow-lg
                                hidden group-hover:block 
                            ">
                                <ul className="divide-y-2">
                                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                        <li key={dropdownIndex} className="p-1">
                                            <NavLink to={dropdownItem.path} >
                                                {dropdownItem.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HeroNav