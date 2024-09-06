
'use server'

// INFO: 1. 调用之后，连接数据库
// INFO: 2. 根据当前的 title 和 OwnerId 找到email
// INFO: 3. 如果找到，就以目前网页的内容更新email
// INFO: 4. 如果没有找到，就创建一个新的Email，保存

import { prisma } from "@/lib/db";


type Props = {
  title: string,
  content: string,
  newsletterOwnerId: string
}


export const saveEmail = async ({ title, content, newsletterOwnerId }: Props) => {
  try {
    // 先查找符合条件的记录
    const existingEmail = await prisma.email.findFirst({
      where: {
        title: title,
        newsletterOwnerId: newsletterOwnerId,
      },
    });

    if (existingEmail) {
      // 如果找到记录，则更新 content
      const updatedEmail = await prisma.email.update({
        where: {
          id: existingEmail.id, // 使用找到的 id 进行更新
        },
        data: {
          content: content,
        },
      });

      console.log('Email updated:', updatedEmail);
      return updatedEmail;
    } else {
      // 如果没有找到记录，则创建新的 Email
      const newEmail = await prisma.email.create({
        data: {
          title: title,
          content: content,
          newsletterOwnerId: newsletterOwnerId,
        },
      });

      console.log('Email created:', newEmail);
      return newEmail;
    }
  } catch (error) {
    console.error('Error upserting email:', error);
  } finally {
    await prisma.$disconnect();
  }
};