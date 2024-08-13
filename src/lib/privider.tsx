'use client'

import React from 'react'
import { QueryClientProvider,QueryClient } from 'react-query'

type Props = { 
  children:React.ReactNode
}

const queryClient = new QueryClient()

const QueryProviders = ({ children }: Props) => {
  return (
    //TODO: 让组件具备缓存数据的功能
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProviders