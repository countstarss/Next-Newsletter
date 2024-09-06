'use server'

import { prisma } from "@/lib/db"

type Props = {
  newsletterOwnerId :string
}

export const getSubscribers = async ({ newsletterOwnerId } : Props) => {

  try {
    const subscribers = await prisma.subscriber.findMany({
      where:{
        newsletterOwnerId:newsletterOwnerId
      }
    })
    return subscribers
  } catch (error) {
    console.log(error);
    return null
  }
}