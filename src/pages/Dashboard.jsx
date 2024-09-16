import React from 'react'
import WidgetSmall from '../components/WidgetSmall'
import { PiUsersFill } from "react-icons/pi";
import LineChartComponent from '../components/LineChart'
import { IoCalendarClearOutline } from "react-icons/io5";
const Dashboard = ({theme}) => {
  return (
    <div className='w-full h-[300vh] bg-main-light-bg dark:bg-main-dark-bg'>
   <div className='w-full flex flex-wrap gap-6 justify-between'>
    <WidgetSmall  Icon={PiUsersFill} text={'Employees'} data={'332'}/>
    <WidgetSmall  Icon={PiUsersFill} text={'Present Employees'} data={'250'}/>
    <WidgetSmall  Icon={PiUsersFill} text={'Late Employees'} data={'32'}/>
    
   </div>
   <div className='w-full h-[30rem] py-8 flex items-center justify-between'>
     <div className='bg-comp-light-bg dark:bg-comp-dark-bg w-[48%] h-[27rem] p-4 pb-8  rounded-xl'>
      <div className=' flex items-center gap-4'>
       <div className='w-fit h-fit bg-icon-light-bg dark:bg-icon-dark-bg p-2 rounded-md text-xs flex items-center gap-2'>
       <IoCalendarClearOutline /><span className='font-semibold'>This Month</span>
       </div>
       <span className='text-lg font-bold '>Late & Absent </span>
        </div>
     <LineChartComponent className='w-full h-full'/>
     </div>
     <div className='bg-comp-light-bg dark:bg-comp-dark-bg w-[48%] h-[27rem] p-4 pb-8 rounded-xl'>
      <div className=' flex items-center  gap-4'>
       <div className='w-fit h-fit bg-icon-light-bg dark:bg-icon-dark-bg p-2 rounded-md text-xs flex items-center gap-2'>
       <IoCalendarClearOutline /><span className='font-semibold'>This Month</span>
       </div>
       <span className='text-lg font-bold '>Late & Absent </span>
        </div>
     <LineChartComponent className='w-full h-full'/>
     </div>
   </div>
  
    </div>
  )
}

export default Dashboard