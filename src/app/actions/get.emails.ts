'use server'

import { prisma } from "@/lib/db"

type Props = {
  newsletterOwnerId: string
}

export const getEmails = async({ newsletterOwnerId } : Props) => {
  try {
    const emails = await prisma.email.findMany({
      where:{
        newsletterOwnerId:newsletterOwnerId
      }
    })
    return emails
  } catch (error) {
    console.log(error);
  }
}