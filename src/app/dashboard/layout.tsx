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
          // MARK: Max-W-Full
          <div className={`
          'max-w-full flex bg-transparent'
          }`}
          >
            {/* FIXME: 再尝试一个ATOM 方案
            //MARK: 300px SideBar
             */}

            <div className='flex flex-row w-[300px]'>
              <div className={`
                "absolute left-0 top-0  w-[250px] h-fit bg-[#2b2b2b]  transition-transform duration-500 ease-in overflow-x-auto" 
                ${!show ? "-translate-x-80" : "translate-x-0"
                }`}
              >
                <DashboardSidebar onClose={setShow} status={show} onDelay={handleSetTimeOut} delay={delay} />
              </div>
              {/* 
              //MARK: 50px Button
               */}
              <div
                className={`
                  'fixed left-0 w-[50px] h-fit  bg-[#00000000] items-center block transition-transform duration-500 ease-in-out'
                  ${show ? "-translate-x-[50px]" : "-translate-x-[250px]"}
                  ${show ? "opacity-0" : "opacity-100"}
                `}
                onClick={() => {
                  // () => setShow(true);
                  () => handleSetTimeOut(true)
                }
                }
              >
                <SlArrowRight
                  className='text-slate-200 text-xl font-bold text-center h-[98vh] ml-4'
                  onClick={() =>
                    // () => setShow(true)
                    handleSetTimeOut(true)
                  }
                />
              </div>
              {/* 
              //MARK: Children W-700px
              */}
              <div
                className={`
                    flex-grow transition-all duration-500 ease-in-out
                    ${show ? "ml-[0px]" : "ml-[-150px]"}
                  `}
              >
                {children}
              </div>

            </div>
            {/* 
              //MARK: 50px | 350px
              */}
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
