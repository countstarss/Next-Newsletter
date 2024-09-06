'use client'

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { ICONS } from "@/utils/icons"
import { toast } from 'sonner';
import { Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { IoMdArrowUp } from 'react-icons/io';
import useSubscriberData from '@/hooks/useSubscribers';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import useGenerateAnalytics from '@/hooks/useGenerateAnalytics';

type Props = {
  show: boolean
}

  const datasss = [
    {
      month: "Jan 2024",
      count: 24,
    },
    {
      month: "Feb 2024",
      count: 13,
    },
    {
      month: "March 2024",
      count: 98,
    },
    {
      month: "April 2024",
      count: 39,
    },
    {
      month: "May 2024",
      count: 48,
    },
    {
      month: "Jun 2024",
      count: 38,
    },
    {
      month: "July 2024",
      count: 43,
    },
  ];

interface subscribersAnalyticsData {
  month:string,
  count:string
}

export const page = ({ show }: Props) => {
  const { data,loading,error } = useSubscriberData();
  const subscribers = data?.length

  const { subscribersData } = useGenerateAnalytics();
  const chartdata: subscribersAnalyticsData[] = [];

    subscribersData &&
    subscribersData?.last6Months?.forEach((item: subscribersAnalyticsData) => {
      chartdata.push({
          month: item?.month,
          count: item?.count,
        });
    });
  console.log(chartdata);
  


  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };


  return (
    // MARK: Screen
    <div
      // className={'flex xl:flex-row flex-col h-screen bg-[#323232] overflow-scroll p-4 gap-4 mx-[300px] w-fit'}>
      className={'flex xl:flex-row flex-col w-full h-full overflow-scroll p-4 gap-4 px-[300px]'}>
      {/* 
      //MARK: 1000PX 居中
      */}
      <div className='flex flex-col w-full justify-start bg-white px-20 rounded-xl min-h-screen'>
        <div className='flex flex-row'>
          {/* INFO: TITLE */}
          <div className='w-full h-full py-8'>
            <h1 className='text-2xl text-black font-medium'>
              HI,{user?.fullName}👏
            </h1>
            <h5 className='text-black text-sm'>Here is how you publication is doing</h5>
          </div>
        </div>

        {/* 
        //MARK: Summary
        */}
        <div className='flex flex-col items-center p-6 justify-around gap-10 transition-transform duration-500 ease-in-out
                        lg:flex-row lg:w-full
                        w-full shadow-lg border'
        >
          <div className='flex flex-row  px-6 py-8  bg-slate-50 items-center gap-8 border-1 rounded-md'>
            <div className='flex flex-col gap-2 '>
              <h2 className='text-xl text-black'>Subscribers</h2>
              <h2 className='text-xl text-black'>{subscribers}</h2>
              <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
            </div>
            <div className='w-[70px] h-[40px] px-1 bg-green-200 flex flex-row items-center text-center justify-between rounded-full'>
              <IoMdArrowUp className='text-xl text-green-400'/>
              <h3 className='text-sm text-black'>100%</h3>
            </div>
          </div>

          <div className='flex flex-row px-6 py-8  bg-slate-50 items-center gap-8 border-1 rounded-md'>
            <div className='flex flex-col gap-2 '>
              <h2 className='text-xl text-black'>Open Rate</h2>
              <h2 className='text-xl text-black'>{subscribers}</h2>
              <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
            </div>
            <div className='w-[70px] h-[40px] px-1 bg-gray-200 flex flex-row items-center text-center justify-between rounded-full'>
              <IoMdArrowUp className='text-xl text-gray-400'/>
              <h3 className='text-sm text-black'>-0%</h3>
            </div>
          </div>
          <div className='flex flex-row px-6 py-8  bg-slate-50 items-center gap-8 border-1 rounded-md'>
            <div className='flex flex-col gap-2 '>
              <h2 className='text-xl text-black'>Click Rate</h2>
              <h2 className='text-xl text-black'>{subscribers}</h2>
              <h4 className='text-sm text-black'>from 0 (last 4 weeks)</h4>
            </div>
            <div className='w-[70px] h-[40px] px-1 bg-gray-200 flex flex-row items-center text-center justify-between rounded-full'>
              <IoMdArrowUp className='text-xl text-gray-400'/>
              <h3 className='text-sm text-black'>-0%</h3>
            </div>
          </div>
        </div>
        {/* 
        // MARK: ActiveSubChart 
        */}


        <div className='flex flex-col xl:w-full p-4 w-2/3 shadow-lg my-8 border py-10'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-lg text-gray-800'>Active Subscribers</h2>
                <h4 className='text-sm'>Shoes All Active Subscribers</h4>
              </div>

              <div className='w-full h-[50vh] p-4 bg-slate-50'>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={datasss}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
      </div>
      {/* 
      MARK: Resources
      */}
      <div className='w-[500px]'>
        <h5 className="text-xl font-medium">Resources</h5>
        <div className="w-full bg-white border rounded p-5 my-3">
          {/* home page url */}
          <div>
            <h4 className="font-medium">Home page</h4>

            <div
              className="w-full px-2 my-1 h-[38px] bg-transparent border border-r-0 rounded-lg relative flex items-center cursor-pointer"
              onClick={handleCopyClick}
            >
              <small
                className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                  copied ? "bg-blue-200" : "bg-transparent"
                }`}
              >
                {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username={user?.username}
              </small>
              <div className="absolute h-[38px] w-[90px] rounded-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                <span className="text-lg">{ICONS.copy}</span>
                <span className="pl-1">copy</span>
              </div>
            </div>
          </div>
        </div>

        {/* 
      //MARK: Tutorials
      */}
      <div className="w-full bg-white border rounded p-5 my-3">
        <h5 className="font-medium">Tutorials</h5>
        <p className="text-sm opacity-[.7]">
          Learn how to get started on becodemy and utilize all our features,
          directly from the becodemy team.
        </p>
        <br />
        <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
          Tutorials <span>{ICONS.link}</span>
        </Button>
      </div>

      {/* 
      //MARK: Need help?
      */}
      <div className="w-full bg-white border rounded p-5 my-3">
        <h5 className="font-medium">Need help?</h5>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">Knowledge base</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">API Documentation</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">Blog</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
            <span className="text-sm">FAQ</span>
            <span className="ml-1">{ICONS.link}</span>
          </div>
        </Link>
      </div>
    </div>

      

    </div>
  )
}

