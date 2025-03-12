import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class

async function deleteUser() {
   await client.user.delete({
    where:{
        id:1
    }
})}

deleteUser();
