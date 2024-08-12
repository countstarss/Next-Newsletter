'use client'
import { ICONS } from '@/utils/icons';
import { UserButton, useUser } from '@clerk/nextjs';
import React, { Dispatch, useEffect, useState } from 'react'
import DashboardItems from './DashboardItems';
import { sideBarBottomItems } from '@/app/configs/constants';
import { CiEdit } from "react-icons/ci";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { showSidebarStatus } from '@/app/configs/constants';
import useToggleSidebar from '@/hooks/useToggleSidebar';
import { SetStateAction } from 'jotai';
import "./dashbiard.css"

type Props = {
  onClose:Dispatch<SetStateAction<boolean>>,
  status:boolean
  onDelay:(trig: boolean) => void
  delay:boolean
}


const DashboardSidebar = ({ onClose,status,onDelay,delay }: Props) => {

  const { user } = useUser();

  const { showSidebar,setShowSidebar } = useToggleSidebar();
  const handleShowSidebar = () => {
    console.log("showSidebar",showSidebar);
    setShowSidebar(true)
    console.log('successfullt Clicked');
    console.log("showSidebar",showSidebar);
  }

  console.log("show:",status);
  const handleClose = () => {
    onClose(false)
  }
  
  useEffect(() => {
    setShowSidebar(false)
  },[showSidebar,setShowSidebar])

  return (
    <div className='w-full h-screen p-2'>
      <div className='absolute top-2 flex flex-row'>
        <div className=' w-fit p-2 px-3 flex items-center text-center bg-slate-600 rounded'>
          <div className='flex items-center text-center'>
            <UserButton />
          </div>
          <h5 className='pl-2 pt-1 capitalize text-white text-sm'>{user ? `${user?.firstName}'s Org` : "NewsLetter"}</h5>
        </div>
        <div className='w-fit px-3 flex items-center gap-[6px] text-center '>
          <div className='m-[4px] hover:bg-slate-200 rounded-lg'>
            <RiArrowLeftDoubleFill 
              className='text-slate-700 text-2xl m-[4px]'
              onClick={() => {
                handleClose()
                onDelay(false)
              }}
            />
          </div>
          <div className='bg-slate-200 hover:bg-slate-300 rounded-lg'>
            <CiEdit className='text-slate-700 m-[4px] text-2xl  font-bold'/>
          </div>
        </div>

      </div>
      <DashboardItems bottomContent={false}/>
    </div>
  )
}

export default DashboardSidebar;