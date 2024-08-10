import Header from '@/shared/widgets/header/header';
import React from 'react'
import Banner from './elements/banner';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full'>
      <Header />
      <Banner />
    </div>  
  )
}

export default Home;