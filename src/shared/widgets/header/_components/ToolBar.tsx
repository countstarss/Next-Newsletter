import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

type Props = {}

const ToolBar = (props: Props) => {
  return (
    <div>
      <Button className='text-md bg-black text-white px-3 py-[8px] mr-4 rounded'>
        Start Trail
      </Button>
      <Link href={'sign-up'}>
        Login
      </Link>
    </div>
  )
}

export default ToolBar;