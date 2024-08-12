import React from 'react'
import { subscribersData } from '@/app/configs/constants'
import { IoMdArrowUp } from "react-icons/io";


type Props = {}

const Sumary = (props: Props) => {

  const subscribers = subscribersData.length

  return (
    <div className='flex flex-col items-center p-6 justify-around gap-10 transition-transform duration-500 ease-in-out
                    lg:flex-row lg:w-full
                    w-full shadow-lg border'
    >
      <div className='flex flex-row  px-6 py-8  bg-slate-50 items-center gap-8 border-r'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl text-black'>Subscribers</h2>
          <h2 className='text-xl text-black'>{subscribers}</h2>
          <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
        </div>
        <div className='w-[70px] h-[40px] px-1 bg-green-200 flex flex-row items-center text-center justify-between rounded-full'>
          <IoMdArrowUp className='text-xl text-green-400'/>
          <h3 className='text-sm text-black'>100%</h3>
        </div>
      </div>

      <div className='flex flex-row px-6 py-8  bg-slate-50 items-center gap-8 border-r'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl text-black'>Open Rate</h2>
          <h2 className='text-xl text-black'>{subscribers}</h2>
          <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
        </div>
        <div className='w-[70px] h-[40px] px-1 bg-gray-200 flex flex-row items-center text-center justify-between rounded-full'>
          <IoMdArrowUp className='text-xl text-gray-400'/>
          <h3 className='text-sm text-black'>-0%</h3>
        </div>
      </div>
      <div className='flex flex-row px-6 py-8  bg-slate-50 items-center gap-8 border-r'>
        <div className='flex flex-col gap-2 '>
          <h2 className='text-xl text-black'>Click Rate</h2>
          <h2 className='text-xl text-black'>{subscribers}</h2>
          <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
        </div>
        <div className='w-[70px] h-[40px] px-1 bg-gray-200 flex flex-row items-center text-center justify-between rounded-full'>
          <IoMdArrowUp className='text-xl text-gray-400'/>
          <h3 className='text-sm text-black'>-0%</h3>
        </div>
      </div>
    </div>
  )
}

export default Sumary;