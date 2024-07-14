import React from 'react'

const Categorybox = ({icon, name, clickedclass, handler = () => {}}) => {
  return (
    <div className={`${clickedclass? "bg-brandRed text-white" : ""}
      p-7 w-[170px] h-[145px] border-2 rounded-md flex flex-col gap-4
      justify-center items-center`} onClick={handler}>
      <div className="h-2/3">{icon}</div>
      <div className="h-1/3 font-medium">{name}</div>
    </div>
  )
}

export default Categorybox;
