import React from 'react'
import { NavLink } from "react-router-dom"
import { ABOUT, CONTACT, FAQS, HOME } from '../../../routes/RouteConstants'

const Nav = () => {
  return (
    <div>Navlinks ={`> `}
        <ul className="inline-flex gap-5">
            <li>
                <NavLink to={HOME}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={ABOUT}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to={CONTACT}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to={FAQS}>
                    Faqs
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav