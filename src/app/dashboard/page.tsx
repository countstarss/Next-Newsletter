'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs';
import Dashboard from './_components/Dashboard';
import Sumary from './_components/Sumary';
import ActiveSubChart from './_components/ActiveSubChart';
import { SlArrowRight } from 'react-icons/sl';
import Resource from './_components/Resource';

type Props = {
  show: boolean
}

const page = ({ show }: Props) => {
  const { user } = useUser();
  return (
    // MARK: Screen
    <div
      className={`'flex xl:flex-row flex-col h-screen bg-[#323232]  overflow-scroll p-4 gap-4 mx-[300px] w-fit'

      `}
    >
      {/* 
      //MARK: 1000PX 居中
      */}
      <div className='flex flex-col lg:w-[1000px] md:w-[768px] justify-start bg-slate-400 px-20'>
        <div className='flex flex-row'>
          {/* INFO: TITLE
        */}
          <div className='w-full h-full p-8'>
            <h1 className='text-2xl text-black font-medium'>
              HI,{user?.fullName}👏
            </h1>
            <h5 className='text-black text-sm'>Here's how you publication is doing</h5>
          </div>
        </div>
        <Sumary />
        <ActiveSubChart />
      </div>
      <Resource />

    </div>
  )
}

export default page;