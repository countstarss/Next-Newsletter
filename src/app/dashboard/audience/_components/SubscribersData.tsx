'use client'

import { getSubscribers } from '@/app/actions/get.subscribers'
import { useClerk } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

type Props = {

}

const SubscribersData = (props: Props) => {

  const [data,setData] = useState([])
  const { user } = useClerk()


  useEffect(() => {
    GetSubscribers()
  },[data])


  const GetSubscribers = async  () => {
    await getSubscribers({ newsletterOwnerId:user?.id!}).then((res:any) => {
      setData(res)}
    )
  }

  return (
    <div>Subscribers</div>
  )
}

export default SubscribersData;