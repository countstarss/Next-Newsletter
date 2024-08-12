'use client'
import { sideBarBottomItems } from '@/app/configs/constants'
import { sideBarItems } from '@/app/configs/constants'
import useRouteChange from '@/hooks/useRouteChange'
import { ICONS } from "../../../utils/icons"
import { SignOutButton, useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useEffect } from 'react'
import SidebarFotterLogo from './SidebarFooterLogo'
import { redirect, usePathname } from 'next/navigation'
import UserPlan from './UserPlan'

type Props = {
  bottomContent?: boolean
}

const DashboardItems = ({ bottomContent }: Props) => {

  const pathname = usePathname();

  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();

  const logoutHandler = () => {
    signOut();
    redirect('/sign-in');
  }

  useEffect(() => {
    setActiveRoute(pathname)
  }, [pathname, setActiveRoute])



  return (
    <div className='flex flex-col justify-between h-full w-full'>
      <div className='flex flex-col h-fit w-full pt-16'>
        {
          sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className={`p-2 py-2 flex items-center border-t-slate-400 text-gray-400 rounded-lg ${item.url === activeRoute &&
                "bg-slate-300"
                }`}
            >
              <span className={`text-lg mx-2 ${item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
              <span className={`text-base mx-2 ${item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))
        }
        <UserPlan />
      </div>


      <div className='flex flex-col h-fit'>
        <div>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-2 flex items-center border-t-slate-400"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-base mx-2 p-1 text-gray-400${item.url === activeRoute &&
                    "text-[#463bbd]"
                    }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-base mx-2 p-1 text-gray-400 ${item.url === activeRoute &&
                    "text-[#463bbd]"
                    }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* //INFO: Log Out
        */}
          <div className="p-2 py-2 flex items-center cursor-pointer border-y-slate-400 text-black h-fit"
            onClick={logoutHandler}
          >
            <span className="text-xl mx-2 p-1 text-gray-400">{ICONS.logOut}</span>
            <span className="text-base text-gray-400 mx-2">Sign Out</span>
          </div>
        </div>

        {/* footer */}
        <div className='flex flex-col px-3'>
          <div className="w-full mt-4 flex justify-center cursor-pointer text-black">
            <SidebarFotterLogo />
          </div>
          <p className="text-sm text-center pt-5 bp-[5px] text-gray-400">
            © 2024 Becodemy, Inc.
          </p>
          <p className="text-sm text-center text-gray-400">
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardItems;