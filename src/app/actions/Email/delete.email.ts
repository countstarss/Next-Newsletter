'use server'

import { prisma } from "@/lib/db"
import { toast } from "sonner"


type Props = {
  id:string
}

export const deleteEmail = async({ id } : Props) => {
  try {
    // MARK: 找到记录
    const email = await prisma.email.delete({
      where: {
        id:id
      },
    });

    if (!email) {
      console.log("Not found");
    }
  } catch (error) {
    console.log(error);
  }
};