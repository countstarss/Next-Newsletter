import Link from 'next/link';
import React from 'react'
import Logo from './_components/Logo';
import NavItems from './_components/NavItems';
import ToolBar from './_components/ToolBar';
import Image from 'next/image';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-screen fixed top-0 z-[999] border-b border-b-[#000] px-10 py-4 flex flex-row items-center justify-between bg-white text-black'>
        {/* <div> */}
          <Link href="/">
            <Logo />
          </Link>
        {/* </div> */}
        <NavItems />
        <ToolBar />
    </header>
  )
}

export default Header;