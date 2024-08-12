import React from 'react'
import { FaBoltLightning } from "react-icons/fa6";

type Props = {}

const UserPlan = (props: Props) => {
  return (
    <div className='flex flex-col bg-pink-100 rounded-xl w-full h-fit mt-4'>
      <div className='flex flex-row items-center text-center'>
        <h4 className='m-1 p-[6px] text-lg text-black'>Launch Plan</h4>
        <div className='flex flex-row m-1 p-2 bg-pink-300 rounded-lg'>
          <FaBoltLightning className='text-white'/>
          <h5 className='text-sm text-white'>Upgrade</h5>
        </div>
      </div>  
    
      <h4 className='m-1 px-2 text-base text-red-600'>Total Subscribers</h4>
      <div className='h-3 w-[220px] mx-2 bg-slate-300 rounded-xl'/>
      <h4 className='m-1 px-2 text-base text-red-600'>0 of 2500 added</h4>
    </div>
  )
}

export default UserPlan;