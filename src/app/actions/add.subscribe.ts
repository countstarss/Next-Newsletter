'use server'

import { prisma } from "@/lib/db"
import { useClerk } from "@clerk/nextjs"
import { log } from "console"
import { toast } from "sonner"

type Props = {
  email:string
  newsletterOwnerId: string
}

export const AddSubscribe = async({ email,newsletterOwnerId } : Props) => {
  try {

    const { user } = useClerk();

    const isValid = await prisma.subscriber.findFirst({
      where: {
        email:email,
        newsletterOwnerId:user?.id!
      }
    })

    if(!isValid) {
      console.log("Email has exist");
      toast.error("Email has exist")
      return;
    }

    const subscribe = await prisma.subscriber.create({
      data: {
        email:email,
        newsletterOwnerId:user?.id!,
      }
    })
    return subscribe
  } catch (error) {
    console.log(error);
  }
}



