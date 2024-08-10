'use client'

import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"

interface ProviderProps {
  children:React.ReactNode
}

export default function   Provider({ children } : ProviderProps) {
  const pathname = usePathname();

  const { isLoaded } = useUser();

  if(!isLoaded) {
    return null
  }

  return (
    <NextUIProvider>
      {
        pathname !== "/dashboard/new-email" &&
        pathname !== "/" &&
        pathname !== "/sign-up" &&
        pathname !== "/subscribe" &&
        pathname !== "/success" &&
        pathname !== "/sign-in" ? (
        <div className='w-full flex'>
          <div className='h-screen overflow-hidden'>
            {children}
          </div>
        </div>
        ) : (
        <div className='w-full flex'>
          {children}
        </div>
        )
      }
    </NextUIProvider>
  )
}