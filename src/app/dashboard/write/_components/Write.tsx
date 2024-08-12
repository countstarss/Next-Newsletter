'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ICONS } from '@/utils/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

type Props = {}

const Write = (props: Props) => {
  const [emailTitle, setEmailTitle] = useState("")
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleCreate = (emailTitle: string) => {
    if (emailTitle.length < 2) {
      toast('email title required')
    } else {
      // NOTE: 替换所有`空格`和`&`
      const formattedTitle = emailTitle.replace(/\s/g, '-').replace(/&/g, '-')
      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }

  }
  return (
    <div className='w-full flex p-5 flex-wrap gap-6'>
      <div
        className='w-[200px] h-[180px] bg-[#3f3f3f] flex flex-col items-center justify-center rounded cursor-pointer'
        onClick={() => setOpen(true)}
      >
        <span className='text-4xl block text-center mb-4 text-gray-300'>{ICONS.plus}</span>
        <h5 className='text-2xl text-gray-300'>Create New</h5>
      </div>
      {
        open && (
          <div className='absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full'>
            <div className='w-[600px] p-5 bg-gray-600 rounded shadow relative'>
              <div className='absolute top-3 left-3 w-full'>
                <span
                  className='text-lg cursor-pointer  text-gray-100'
                  onClick={() => setOpen(false)}
                >
                  {ICONS.cross}
                </span>
              </div>

              <div className='p-4'>
                <h5 className='text-xl text-gray-100'>Enter your Email Title</h5>
                <div className='flex flex-row w-full justify-center'>
                  <Input
                    type="text"
                    className='w-3/4 my-2 h-[40px] px-2 outline-none border-zinc-100 mt-3 text-white text-lg font-bold'
                    onChange={(e) => setEmailTitle(e.target.value)}
                  />
                  <Button
                    className='rounded text-xl m-3 mr-0 text-gray-100 bg-gray-800 hover:bg-gray-700'
                    onClick={() => handleCreate(emailTitle)}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Write;