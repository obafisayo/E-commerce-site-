import React from 'react'
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const PrimaryButton = ({to, text, bgColor, textColor, handler = () => {} }) => {
  return (
    <NavLink to={to}
      className={`${bgColor} ${textColor}
        cursor-pointer hover:scale-105
        duration-300 py-2 px-8 rounded-full
        relative z-10
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