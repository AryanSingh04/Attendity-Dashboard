import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
const Navbar = ({theme}) => {
  return (
    <div className='w-1/5 h-full bg-nav-light-bg dark:bg-nav-dark-bg flex flex-col gap-[3px]'>
        <div className='w-full h-[7.35rem]  flex items-center justify-center text-2xl font-bold '>
            Attendity
        </div>
        <hr className='h-[1px] dark:bg-gray-700' />
        <div className='w-full h-[calc(100vh-7.35rem)] flex flex-col p-12 gap-8 text-lg ' >
       
        <NavLink to="/" className={({ isActive }) => `p-2 rounded-md flex items-center gap-2 ${isActive ? ' text-blue-600' : ''}`}>
  {({ isActive }) => (
    <>
    <RiDashboardHorizontalLine className={isActive ? "fill-blue-800" : "fill-black dark:fill-white"}/>
    <span className={isActive ? "active" : ""}>Tasks</span>
    </>
  )}
</NavLink>
<NavLink to="/employee" className={({ isActive }) => `p-2 rounded-md flex items-center gap-2 ${isActive ? ' text-blue-600' : ''}`}>
  {({ isActive }) => (
    <>
    <BsFillPeopleFill className={isActive ? "fill-blue-800" : "fill-black dark:fill-white"}/>
    <span className={isActive ? "active" : ""}>Employees</span>
    </>
  )}
</NavLink>
<NavLink to="/active-employee" className={({ isActive }) => `p-2 rounded-md flex items-center gap-2 ${isActive ? ' text-blue-600' : ''}`}>
  {({ isActive }) => (
    <>
    <BsFillPeopleFill className={isActive ? "fill-blue-800" : "fill-black dark:fill-white"}/>
    <span className={isActive ? "active" : ""}>Active Employees</span>
    </>
  )}
</NavLink>
        </div>
    </div>
  )
} 

export default Navbar