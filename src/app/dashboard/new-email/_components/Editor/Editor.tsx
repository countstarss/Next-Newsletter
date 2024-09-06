'use client';
import React, { useEffect, useRef, useState } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { saveEmail } from '@/app/actions/Email/save.email';
import { Toaster, toast } from 'sonner';
import { getEmailDetail } from '@/app/actions/Email/get.emailDetail';

type Props = {
  subjectTitle: string;
};

const Editor = ({ subjectTitle }: Props) => {
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState<any>();
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  useEffect(() => {
    const fetchEmailDetails = async () => {
      try {
        const res = await getEmailDetail({
          title: subjectTitle,
          newsletterOwnerId: user?.id!,
        });

        if (res) {
          // Assuming res is a string; adjust if needed
          setJsonData(JSON.parse(res));
        }
      } catch (error) {
        console.error('Failed to fetch email details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmailDetails();
  }, [subjectTitle, user?.id]);

  // NOTE: 在jsonData变化之后，马上重新加载
  useEffect(() => {
    if (!emailEditorRef.current || !jsonData) return;
    const unlayer = emailEditorRef.current?.editor;
    if (unlayer) {
      unlayer.loadDesign(jsonData);
    }
  }, [jsonData]);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
      // await sendEmail({
      //   userEmail: ["sponsorship@becodemy.com"],
      //   subject: subjectTitle,
      //   content: html,
      // }).then((res:any) => {
      //   toast.success("Email sent successfully!");
      //   history.push("/dashboard/write");
      // });
    });
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      try {
        const response = await saveEmail({
          title: subjectTitle,
          content: JSON.stringify(design),
          newsletterOwnerId: user?.id!,
        });
        setJsonData(JSON.stringify(response?.content));
        toast.success('Draft saved successfully!');
        history.push('/dashboard/write')
      } catch (error) {
        console.error('Failed to save draft:', error);
      }
    });
  };

  return (
    <>
      <div className='absolute top-4 right-6 flex items-center gap-4'>
        <Toaster />
        <Button
          className='bg-gray-600 text-white cursor-pointer hover:bg-gray-500 rounded'
          onClick={() => {
            saveDraft();
          }}
        >
          <span className='opacity-70'>Save Draft</span>
        </Button>
        <Button className='bg-gray-600 text-white cursor-pointer hover:bg-gray-500 rounded'>
          <span className='opacity-70'>Send</span>
        </Button>
      </div>
      <div className='w-full h-[90vh] relative mt-4 rounded overflow-hidden'>
        <EmailEditor ref={emailEditorRef} onReady={exportHtml} minHeight={"90vh"} />
      </div>
    </>
  );
};

export default Editor;
