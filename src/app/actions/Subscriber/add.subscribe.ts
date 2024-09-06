'use server'

import { prisma } from "@/lib/db"
import { useClerk, useUser } from "@clerk/nextjs"
import { log } from "console"
import { toast } from "sonner"

type Props = {
  email:string
  newsletterOwnerId: string
}

export const AddSubscribe = async({ email, newsletterOwnerId} : Props) => {
  try {

    const dbsubscriber = await prisma.subscriber.findFirst({
      where: {
        email
      }
    })

    if(dbsubscriber) {
      console.log("Email has exist");
      return;
    }

    const subscribe = await prisma.subscriber.create({
      data: {
        email:email,
        newsletterOwnerId:newsletterOwnerId
      }
    })
    return subscribe
  } catch (error) {
    console.log(error);
    return null
  }
}



