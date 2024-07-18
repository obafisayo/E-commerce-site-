import React from 'react'
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const PrimaryButton = ({to, text, bgColor, textColor, border, handler = () => {} }) => {
  return (
    <NavLink to={to}
      className={`${bgColor} ${textColor} ${border}
        cursor-pointer hover:scale-105 hover:${bgColor}/50
        duration-300 lg:py-4 sm:px-12 py-3 px-6
        relative z-10 rounded-md
      `}
      onClick={handler}
    >
      {text}
    </NavLink>
  )
}

PrimaryButton.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    handler: PropTypes.func
}

export default PrimaryButton;