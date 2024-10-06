'use client'
import { deleteEmail } from '@/app/actions/Email/delete.email'
import { getEmails } from '@/app/actions/Email/get.emails'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useListStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import { ICONS } from '@/utils/icons'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type Props = {}

const Write = (props: Props) => {

  const [loadedUp, setLoadedUp] = useState(false)
  const [emailTitle, setEmailTitle] = useState("")
  const [open, setOpen] = useState(false)
  const { emails, setEmails } = useListStore()
  const { user } = useClerk()
  const router = useRouter()

  // MARK: findEmails
  const findEmails = async () => {
    try {
      await getEmails({ newsletterOwnerId: user?.id! })
      .then((res: any) => {
        setEmails(res)
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    findEmails()
  }, [user])

  // MARK: handleCreate
  const handleCreate = (emailTitle: string) => {
    if (emailTitle.length < 2) {
      toast('email title required')
    } else {
      // NOTE: 替换所有`空格`和`&`
      const formattedTitle = emailTitle.replace(/\s/g, '-').replace(/&/g, '-')
      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  }

  // MARK: deleteHanlder
  const deleteHanlder = async (id: string) => {
    const deleted = await deleteEmail({ id:id }).then((res) => findEmails() )
    if(deleted!) {
      toast.success("Successfully deleted email template");
    }
  }


  return (
    <div className='flex xl:flex-row flex-col w-full h-full overflow-scroll p-4 gap-4 px-[300px]'>
      <div className='w-[75vw] grid lg:grid-cols-5 md:grid-cols-3 py-8 pr-5 flex-wrap justify-around gap-5 mx-[5vw]'>
        {
          emails && emails.map((email: any) => {
            const formattedTitle = email?.title.replace(/\s/, " ").replace(/\&/, " ")
            return (
              <div
                key={email?.id}
                className="w-[190px] h-[180px] z-[0] bg-[#3f3f3f] flex relative flex-col items-center justify-center rounded cursor-pointer"
              >
                <span
                  className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer text-gray-200"
                  onClick={() => deleteHanlder(email?.id)}
                >
                  {ICONS.delete}
                </span>
                <Link
                  href={`/dashboard/new-email?subject=${formattedTitle}`}
                  className="text-xl"
                >
                  {email.title}
                </Link>
              </div>
            )
          })
        }
        <div
          className='w-[190px] h-[180px] bg-[#3f3f3f] flex flex-col items-center justify-center rounded cursor-pointer'
          onClick={() => setOpen(true)}
        >
          <span className='text-4xl block text-center mb-4 text-gray-300'>{ICONS.plus}</span>
          <h5 className='text-2xl text-gray-300'>Create New</h5>
        </div>
        {
          open && (
            <div className='absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full'>
              <div className='w-[600px] p-5 bg-gray-600 rounded shadow relative'>
                <div className="absolute top-3 left-3 w-full">
                  <span
                    className='text-lg cursor-pointer  text-gray-100'
                    onClick={() => setOpen(false)}
                  >
                    {ICONS.cross}
                  </span>
                </div>

                <div className='p-4 mt-3'>
                  <h5 className='text-xl text-gray-100'>Enter your Email Title</h5>
                  <div className='flex flex-row w-full justify-center'>
                    <Input
                      type="text"
                      className='w-3/4 my-2 h-[40px] px-2 outline-none border-zinc-100 mt-3 text-white text-lg'
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
    </div>
  )
}

export default Write;