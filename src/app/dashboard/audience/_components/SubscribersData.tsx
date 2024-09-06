'use client'

import { getSubscribers } from '@/app/actions/Subscriber/get.subscribers'
import useSubscriberData from '@/hooks/useSubscribers'
import { useClerk } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { format } from "timeago.js"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

type Props = {}

const SubscribersData = (props: Props) => {

  const { data,loading,error } = useSubscriberData();
  const { user } = useClerk()

  const columns = [
    {field:"id", headerName:"ID", flex: 0.5},
    {field:"email", headerName:"Email", flex: 0.8},
    {field:"createdAt", headerName:"createdAt", flex: 0.5},
    {
      field:"status", 
      headerName:"Status", 
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <>
            <h1>{params.row.status}</h1>
          </>
        )}
    },
  ]

  const rows: subscribersDataTypes[] =[]
  
  // 注意data的类型是 subscribersDataTypes[]
  data?.forEach((i:subscribersDataTypes) => {
    rows.push({
      id:i.id,
      email: i.email,
      createdAt: format(i.createdAt),
      status: i?.status,
    })
  });

  console.log(rows);  

  return (
    <Box className='w-full my-[20px]'>
      <Box
        height="80vh"
        className='mx-auto mt-[40px]'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            outline: "none",
          },
          "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
            color: "#000",
          },
          "& .MuiDataGrid-sortIcon": {
            color: "#000",
          },
          "& .MuiDataGrid-row": {
            color: "#000",
            borderBottom: "1px solid #0000001f!important",
          },
          "& .MuiTablePagination-root": {
            color: "#000",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none!important",
          },
          "& .name-column--cell": {
            color: "#000",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#A4A9FC",
            borderBottom: "none",
            color: "#000",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #0000001f",
          },
          "& .MuiDataGrid-footerContainer": {
            color: "#000",
            borderTop: "none",
            backgroundColor: "#A4A9FC",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          },
          "& .MuiCheckbox-root": {
            color: `#3462ea !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#000!important",
          },
          "& #:r1: .MuiTablePagination-displayedRows": {
            color: "#171717!important",
          },
        }}
      >
        <DataGrid checkboxSelection columns={columns} rows={rows} className='text-black'/>
      </Box>
    </Box>
  )
}

export default SubscribersData;