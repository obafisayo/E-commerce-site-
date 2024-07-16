import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";

const RoundButton = ({left, right, down, handler = () => {}}) => {
  return (
    <div className="rounded-full p-2 bg-secondary" onClick={handler}>
        {right && <IoArrowForwardOutline size={24} />}
        {left && <IoArrowBackOutline size={24} />}
        {down && <IoArrowDownOutline size={24} />}
    </div>
  )
}

export default RoundButton