import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'
import MobileHero from "./MobileHero.png"
import Link from 'next/link';

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='bg-[#ffffff] h-screen w-full'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="214"
        height="214"
        fill="none"
        className="absolute block -top-3 -left-24 md:-left-0"
      >
        <path
          fill="#F092DD"
          stroke="#0B0D2A"
          d="M177.711 31.85c2.435-2.017 5.683 1.232 3.667 3.666L136.329 89.9c-2.359 2.848-.567 7.175 3.115 7.52l70.309 6.601c3.148.296 3.148 4.89 0 5.185l-70.309 6.601c-3.682.346-5.474 4.673-3.115 7.521l45.049 54.383c2.016 2.435-1.232 5.683-3.667 3.667l-54.383-45.049c-2.848-2.359-7.175-.567-7.521 3.115l-6.601 70.309c-.295 3.148-4.889 3.148-5.185 0l-6.6-70.309c-.346-3.682-4.673-5.474-7.521-3.115l-54.384 45.049c-2.434 2.016-5.683-1.232-3.666-3.667l45.048-54.383c2.36-2.848.568-7.175-3.115-7.521l-70.309-6.601c-3.147-.295-3.147-4.889 0-5.185l70.31-6.6c3.681-.346 5.474-4.673 3.114-7.521L31.85 35.516c-2.017-2.434 1.232-5.683 3.666-3.666L89.9 76.898c2.848 2.36 7.175.568 7.52-3.115l6.601-70.309c.296-3.147 4.89-3.147 5.185 0l6.601 70.31c.346 3.681 4.673 5.474 7.521 3.114l54.383-45.048Z"
        ></path>
      </svg>
      <div className="w-[full] h-full flex justify-center items-center relative overflow-hidden">
        <div className="w-[full] h-full flex justify-center items-center scale-110 fixed">
          <Image
            src={MobileHero}
            alt="111"
            width={1500}
            height={1500}
            className="w-[1000px] h-fit object-cover animation spinSlow z-10"
            priority
          ></Image>
        </div>

        {/* INFO: H1标题
         */}
        <div className="top-20 text-black items-center text-center w-4/5">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] text-center z-10
                        md:text-[3.25rem]
                        lg:text-[4rem]
                        xl:text-[5.75rem]
                        max-w-4xl mx-auto "
          >
            THE
          </h1>
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] text-center z-10
                        md:text-[3.25rem]
                        lg:text-[4rem]
                        xl:text-[5.75rem]
                        max-w-4xl mx-auto "
          >
            NEWSLETTER
          </h1>
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] text-center z-10
                        md:text-[3.25rem]
                        lg:text-[4rem]
                        xl:text-[5.75rem]
                        max-w-4xl mx-auto "
          >
            PLATFORM BUILT 
          </h1>
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] text-center z-10
                        md:text-[3.25rem]
                        lg:text-[4rem]
                        xl:text-[5.75rem]
                        max-w-4xl mx-auto "
          >
            FOR
            <span className="font-style">GROW</span>
          </h1>
          <br />
          <h3 className="text-3xl text-center">Built by newsletter people</h3>
          <br />
          <div className="flex w-full justify-center">
            <Button className="text-xl !p-4 bg-slate-800 text-white rounded outline-none">
              <a href="/dashboard">
                Get Started
              </a>
            </Button>
          </div>
          <br />
          <Button className='rounded-lg'>
            {/* <h5 className="text-center text-lg"></h5> */}
            start a 30day free trial
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Banner;

