'use client'
import React from 'react'
import { button, Button } from '@nextui-org/react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

type Props = {}

const ToolBar = (props: Props) => {
  const { user } = useUser();

  return (
    <div className='flex flex-row items-center text-center'>
      {
        user && (
          <Link href={"/dashboard"}>
            <Button className='mr-6 p-2 bg-black text-white rounded'>Dashboard</Button>
          </Link>
        )
      }
      <SignedOut>
        <Link href={"/sign-in"}>
          <h1>Sign In</h1>
        </Link>
      </SignedOut>
      <SignedIn>
      <div className='flex py-[10px] rounded scale-150 items-center text-center'>
          <UserButton />
      </div>
      </SignedIn>
    </div>
  )
}

export default ToolBar;