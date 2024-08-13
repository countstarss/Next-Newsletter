import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient();
export const connectionString = `${process.env.DATABASE_URL}`






// import mongoose from "mongoose"
// import { driver, createAstraUri} from "stargate-mongoose"

// export const connecteDB = async () => {
//   try {
//     const uri = createAstraUri(
//       process.env.ASTRA_DB_API_ENDPOINT!,
//       process.env.ASTRA_DB_APPLICATION_TOKEN!
//     )

//     // 检查是否连接
//     if(mongoose.connection.readyState !== 0) {
//       await mongoose.disconnect();
//     }

//     mongoose.set('autoCreate',true)
//     mongoose.setDriver(driver)

//     await mongoose.
//     connect(uri,{
//       isAstra:true,
//     })
//     .then((res) => {
//       console.log("success connected");
//     })
//     .catch((error) => {
//       console.log(error);
      
//     })

//   } catch (error) {
//     console.log(error);
//   }
// }