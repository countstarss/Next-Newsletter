'use client'

import React, { Children } from 'react'
import { useUser } from '@clerk/nextjs';

type Props = {
  children:React.ReactNode,
  show:boolean
}

const Dashboard = ({ show,children }: Props) => {
  const { user } = useUser();
  return (
    <>
      {
        children
      }
    </>
  )
}

export default Dashboard;