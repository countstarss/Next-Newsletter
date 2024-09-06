'use client'

import { useUser } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import DashboardSidebar from "./_components/Sidebar/DashboardSidebar";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

interface ProviderProps {
  children: React.ReactNode
}

export default function layout({ children }: ProviderProps) {

  const pathname = usePathname();

  const { isLoaded } = useUser();

  if (!isLoaded) {
    return null
  }
  const [show, setShow] = useState(true);
  const [delay, setDelay] = useState(false);
  const handleSetTimeOut = (trig: boolean) => {
    setTimeout(() => {
      setShow(trig)
    }, 400);
  }

  return (
    <NextUIProvider>
      {
        pathname !== "/404" &&
        pathname !== "/dashboard/new-email" &&
        pathname !== "/" &&
        pathname !== "/sign-up" &&
        pathname !== "/subscribe" &&
        pathname !== "/success" &&
        pathname !== "/sign-in" ? (
          <div className={`max-w-full flex bg-transparent`}>
            {/* 
            //MARK: SideBar
            */}
            <div className='flex flex-row w-[300px]'>
              {/* Sidebar */}
              <div
                className={`
                  fixed left-0 top-0 bottom-0 w-[250px] h-screen bg-[#212121] transition-transform duration-500 ease-in overflow-x-auto
                  ${!show ? "-translate-x-80" : "translate-x-0"}
                `}
              >
                <DashboardSidebar
                  onClose={setShow}
                  status={show}
                  onDelay={handleSetTimeOut}
                  delay={delay}
                />
              </div>

              {/* Toggle Button (appears when sidebar is hidden) */}
              <div
                className={`
                  fixed top-0 bottom-0 left-0 w-[50px] h-screen bg-[#00000000] items-center flex transition-transform duration-500 ease-in-out
                  ${show ? "-translate-x-[50px]" : "-translate-x-0"}
                  ${show ? "opacity-0" : "opacity-100"}
                `}
              >
                <SlArrowRight
                  className='text-slate-200 text-xl font-bold text-center ml-4 cursor-pointer'
                  onClick={() => handleSetTimeOut(true)}
                />
              </div>

              {/* 
              //MARK: Main Content
              */}
              <div
                className={`
                  flex-grow transition-all duration-500 ease-in-out
                  ${show ? "ml-[0px]" : "ml-[-70px]"}
                `}
              >
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div className='flex bg-pink-400 w-screen h-screen'>
            {children}
          </div>
        )
      }
    </NextUIProvider>
  )
}
