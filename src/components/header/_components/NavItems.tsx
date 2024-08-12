import { navItems } from '@/app/configs/constants';
import Link from 'next/link';
import React from 'react'

type Props = {}

const NavItems = (props: Props) => {
  return (
    // INFO: map新写法：学习学习！！
    // WARNING: 注意这里的宽度可能会挤压 LOGO 的宽度
    <div className="w-fit hidden md:flex items-end">
      {
        navItems.map((i:NavItems, index:number) => (
          <Link className='px-5 text-lg' key={index} href="/">
            {i.title}
          </Link>
        ))
      }
    </div>
  )
}

export default NavItems;