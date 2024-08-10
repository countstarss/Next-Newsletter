'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-[#61ffb8] via-[#58ffe9] to-indigo-400'>
      <div className='flex flex-col items-center text-center pt-[20vh]'>
        <SignIn />
      </div>
    </div>
  )
}

export default page