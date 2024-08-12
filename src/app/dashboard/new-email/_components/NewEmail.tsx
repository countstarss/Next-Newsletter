'use client'

import { ICONS } from "@/utils/icons"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Editor from "./Editor/Editor"


type Props = {}

const NewEmail = (props: Props) => {

  const searchParams = useSearchParams()
  const subject:string = searchParams.get("subject")!
  const subjectTitle = subject.replace(/-/g," ")

  return (
    <div className='w-full h-full bg-gray-800'>
      <div className='w-full h-[100vh] p-6 bg-gray-800 rounded-xl'>
        <Link 
          className='opacity-75 w-min flex text-xl items-center hover:text-gray-200'
          href={`/dashboard/write`}
        >
          <span>{ICONS.backArrow}</span>
          <span>Exit</span>
        </Link>
        {/* 
          //TODO: EMAIL Editor  
        */}

        <div className='w-full'>
          <Editor subjectTitle={subjectTitle} />
        </div>

      </div>
    </div>
  )
}

export default NewEmail;