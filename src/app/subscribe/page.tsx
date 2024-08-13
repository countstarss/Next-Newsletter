'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { AddSubscribe } from '../actions/add.subscribe';
import { useClerk } from '@clerk/nextjs';

type Props = {}

const page =  (props: Props) => {

  const [value, setValue] = useState("");
  const { user } = useClerk();
  const newsletterOwnerId = user?.id!
  const handleSubscribe = async () => {
    // Subscribe Here
    await AddSubscribe({ email:value, newsletterOwnerId:newsletterOwnerId })
  }

  return (
    <div className='w-sceern h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 z-full'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full'>
        <div className='flex flex-col '>
          <h1 className='text-white text-6xl font-bold'>Luke Ling's NewsLetter</h1>
          <div className='flex flex-row p-6 m-8 bg-slate-50 w-300px items-center text-center rounded'>
            <Input
              type='email'
              placeholder='Enter your Email'
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className='text-gray-400 text-2xl w-2/3 h-[50px]'
            >
            </Input>
            <div className='w-1/3 p-[6px] bg-black text-white hover:scale-110 transform duration-300'>
              <Button 
                className=' text-lg p-4 '
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;