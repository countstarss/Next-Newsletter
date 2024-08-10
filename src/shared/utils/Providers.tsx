'use client'

import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"

interface ProviderProps {
  children:React.ReactNode
}

export default function   Provider({ children } : ProviderProps) {
  const pathname = usePathname();

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
          <div className='w-[1290px] h-screen overflow-scroll'>
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