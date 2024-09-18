import React, { Suspense, lazy } from 'react'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

// Lazy load the image component
const LazyImage = lazy(() => import('../components/LazyImage'))

const Employee = () => {
  const { id } = useParams()

  const ImageSkeleton = () => (
    <div className='w-1/5 h-[70%] bg-gray-300 rounded-xl animate-pulse'></div>
  )

  return (
    <div className='w-full h-[200%] flex *: py-10 flex-col gap-4'>
      <div className='w-[95%] h-2/5  bg-comp-light-bg dark:bg-comp-dark-bg rounded-3xl flex items-center px-10 gap-4'>
        <Suspense fallback={<ImageSkeleton />}>
          <LazyImage
            src="https://www.vetbossel.in/wp-content/uploads/2022/12/code-with-harry.jpg"
            alt=""
            className='w-1/5 object-cover h-[70%] rounded-xl'
          />
        </Suspense>
       
        <div className='w-4/5 h-4/5 px-4 py-4 '>
          <div className=''>
            <h1 className='text-2xl font-bold'>Harsh Sharma</h1>
            <h3 className='text-sm font-semibold'>Product Manager</h3>
          </div>
          <hr className=' border-gray-400 my-2' />
          <div className='w-full h-4/5  mt-2  flex justify-between'>
            <div className='w-3/5  h-full grid grid-cols-2  gap-4'>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400 '>Employee ID</h6>
                <p>{id}</p>
              </div>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400'>Office ID</h6>
                <p>556800</p>
              </div>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400'>Phone</h6>
                <p>+91 9876543210</p>
              </div>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400'>Email</h6>
                <Link title='Open Email' className='cursor-pointer hover:underline' to={'mailto:harshsharma@gmail.com'}>harshsharma@gmail.com</Link>
              </div>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400'>Managed By</h6>
                <Link to={'/employee/55'} className=' hover:underline'>Jagdish Sharma</Link>
              </div>
              <div className=''>
                <h6 className='text-sm font-semibold text-gray-400'>Date Joined</h6>
                <p>12/12/2021</p>
              </div>
            </div>
            <div className='w-[35%] h-full  flex flex-col gap-4'>
              <div className='w-fit h-fit bg-icon-light-bg dark:bg-icon-dark-bg p-2 rounded-md text-xs flex items-center gap-2'>
                <IoCalendarClearOutline /><span className='font-semibold'>This Month</span>
              </div>
              <div className='w-full rounded-md flex flex-col justify-between h-full bg-main-light-bg dark:bg-main-dark-bg p-2'>
                <h1 className='text-2xl font-body' title='Absent Days'>Absent <span className='text-4xl'>|</span  > 55</h1>
                <h1 className='text-2xl font-body' title='Late Days'>Late <span className='text-4xl'>|</span  > 55</h1>
                <h1 className='text-2xl font-body cursor-default  ' title='Averge Workong Hour'>Avg.Wokring  <span className='text-4xl'>|</span  >8.5</h1>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className='w-[95%] flex h-2/5 justify-between '>
        <div className='w-[60%] h-4/5  bg-comp-light-bg dark:bg-comp-dark-bg rounded-3xl'></div>
        <div className='w-[35%] h-fit   bg-comp-light-bg dark:bg-comp-dark-bg rounded-3xl'>
          <Calendar className={"w-full  p-2"} maxDate={""} minDate={""}/>
        </div>
      </div>
      
    </div>
  )
}

export default Employee