import React from 'react'
import { PiUsersFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
const WidgetSmall = ({text,data,Icon}) => {
  return (
    <div className='w-[30%] h-24 bg-comp-light-bg dark:bg-comp-dark-bg flex items-center gap-4 px-4 rounded-xl'>
        <Icon className='w-12 h-12 fill-[#422AFB] bg-icon-light-bg dark:bg-icon-dark-bg p-2 rounded-full' />  
        <div className='flex flex-col'>
            <span className='text-sm text-gray-400'>{text}</span>
            <span className='text-xl font-bold '>{data}</span>
        </div>
    </div>
  )
}

export default WidgetSmall