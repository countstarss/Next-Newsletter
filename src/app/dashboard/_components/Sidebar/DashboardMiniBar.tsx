'use client'
import { ICONS } from '@/utils/icons';
import { UserButton, useUser } from '@clerk/nextjs';
import React, { Dispatch, useEffect, useState } from 'react'
import DashboardItems from './DashboardItems';
import { CiEdit } from "react-icons/ci";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import useToggleSidebar from '@/hooks/useToggleSidebar';
import { SetStateAction } from 'jotai';
import "./dashboard.css"
import Link from 'next/link';
import DashboardMiniItems from './DashboardMiniItems';

type Props = {
  onClose:Dispatch<SetStateAction<boolean>>,
  status:boolean
  onDelay:(trig: boolean) => void
  delay:boolean
}


const DashboardminiBar = ({ onClose,status,onDelay,delay }: Props) => {

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
      <DashboardMiniItems bottomContent={false}/>
    </div>
  )
}

export default DashboardminiBar;