import useSubscriberData from '@/hooks/useSubscribers';
import { Slider } from '@nextui-org/react';
import React from 'react'
import { FaBoltLightning } from "react-icons/fa6";

type Props = {}

const UserPlan = (props: Props) => {

  const { data, loading } = useSubscriberData()
  const numOfSubscribers = data?.length!
  const percent = Number((numOfSubscribers! / 2500) * 100);
  console.log(percent);
  
  return (
    <div className='flex flex-col bg-pink-100 rounded-xl w-[95%] h-fit mt-4 mx-auto'>
      <div className='flex flex-row items-center text-center'>
        <h4 className='m-1 p-[6px] text-lg text-black'>Launch Plan</h4>
        <div className='flex flex-row m-1 p-2 bg-pink-300 rounded'>
          <FaBoltLightning className='text-white' />
          <h5 className='text-sm text-white'>Upgrade</h5>
        </div>
      </div>

      <h4 className='m-1 mx-2 px-2 text-base text-red-600'>Total Subscribers</h4>
      <div className='h-3 w-[200px] mx-auto bg-slate-300 rounded-xl'>
        {/* <div className={`h-3 bg-red-400 rounded-xl w-[${percent}%]`} /> */}
      </div>
      <Slider />
      <h4 className='m-1 mx-2 px-2 text-base text-red-600'>{loading ? "..." : `${numOfSubscribers}`} of 2500 added</h4>
    </div>
  )
}

export default UserPlan;