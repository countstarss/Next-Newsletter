'use server'

import { prisma } from "@/lib/db"


type Props = {
  title: string,
  newsletterOwnerId: string
}

export const getEmailDetail = async({ title, newsletterOwnerId } : Props) => {
  try {
    const emailDetail = await prisma.email.findFirst({
      where:{
        title,
        newsletterOwnerId
      }
    })
    return emailDetail?.content
  } catch (error) {
    console.log(error);
  }
}
