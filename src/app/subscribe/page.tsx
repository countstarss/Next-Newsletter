'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { AddSubscribe } from '../actions/Subscriber/add.subscribe';
import { useClerk } from '@clerk/nextjs';
import { toast } from 'sonner';
import { sendVerificationEmail } from '@/utils/email.sender';
import { redirect, useRouter } from 'next/navigation';

type Props = {}

const page = (props: Props) => {

  const router = useRouter()
  const [enteredEmail, setEnteredEmail] = useState("");
  const { user } = useClerk();
  const newsletterOwnerId = user?.id!
  const handleSubscribe = async () => {
    // Subscribe Here
    try {
      const result = await AddSubscribe({ email:enteredEmail,newsletterOwnerId:newsletterOwnerId })
      if(result) {
        toast.success("Subscribe Succesfully!")
      } else {
        toast.error("Something went wrong,please try again")
      }
      setTimeout(async () => {
        // Vertify Email
        const res = await sendVerificationEmail(enteredEmail)
        if(res) {
          toast.success(`Send Vertify Email to${enteredEmail}`)
        }
        setEnteredEmail("")
      },1500)

      router.push('/dashboard')

    }catch(error) {
      console.log(error);
    }
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
              onChange={(e) => setEnteredEmail(e.target.value)}
              value={enteredEmail}
              className='text-gray-400 text-2xl w-2/3 h-[50px]'
            >
            </Input>
            <div className='w-1/3 p-[6px] bg-black text-white hover:scale-110 transform duration-300'>
              <Button 
                className=' text-lg p-4 '
                onClick={
                  () => {
                    console.log("Button has been clicked");
                    handleSubscribe()
                  }
                }
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