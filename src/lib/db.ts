import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient();
export const connectionString = `${process.env.DATABASE_URL}`
