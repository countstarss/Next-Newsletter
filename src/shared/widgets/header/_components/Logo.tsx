import React from 'react'
import { Fauna_One } from '@next/font/google';

const fontDisplay = Fauna_One({
  subsets: ['latin'],
  weight: ['400'], // Adjust weight as needed
});

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='relative flex items-center text-2xl font-bold sankofa-display-regular'>
      <h1 className={fontDisplay.className}>Insight Lab</h1>
    </div>
  )
}

export default Logo;