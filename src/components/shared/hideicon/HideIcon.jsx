import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const HideIcon = () => {
    const [isHidden, setIsHidden] = useState(false);

    const handleHeartClick = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div>
            <IoEyeOffOutline className="absolute" onClick={handleHeartClick} color={isHidden ? "black" : "transparent"}  size={24}/>
            <IoEyeOutline onClick={handleHeartClick} color={isHidden ? "transparent" : "black"} size={24} />
        </div>
    )
}

export default HideIcon