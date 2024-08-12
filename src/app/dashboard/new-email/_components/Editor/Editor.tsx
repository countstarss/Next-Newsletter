'use client'
import React, { useRef, useState } from 'react'
import { DefaultJsonData } from '@/assets/EmailTemplate/default'
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

type Props = {
  subjectTitle: string
}

const Editor = ({ subjectTitle }: Props) => {

  const [loading, setLoading] = useState(true)
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData)
  const { user } = useClerk();

  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter()

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      setJsonData(design)
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };


  return (
    <>
      <div className='absolute top-4 right-6 flex items-center gap-4'>
        <Button className='bg-gray-600 text-white cursor-pointer hover:bg-gray-500 rounded'>
          <span className='opacity-70'>Save Draft</span>
        </Button>
        <Button className='bg-gray-600 text-white cursor-pointer hover:bg-gray-500 rounded'>
          <span className='opacity-70'>Send</span>
        </Button>
      </div>
      <div className='w-full h-[90vh] relative mt-4 rounded overflow-hidden'>
        <EmailEditor ref={emailEditorRef} onReady={onReady} minHeight={"90vh"} />
      </div>
    </>
  );
}

export default Editor;