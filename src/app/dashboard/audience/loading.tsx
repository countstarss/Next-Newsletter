import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

type Props = {}

const loading = (props: Props) => {
  return (
    <Skeleton className="w-[1200px] p-5 h-screen overflow-hidden mx-auto">
      <Skeleton className="text-2xl font-medium text-white" />
      <Skeleton className="pt-1 text-lg">View and manage your subscribers</Skeleton>
      <Skeleton className='w-full my-[20px] mx-auto' />
    </Skeleton>
  )
}

export default loading