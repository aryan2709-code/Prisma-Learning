import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class

async function updateUser() {
   await client.user.update({
    where : {
        id : 2
    },
    data : {
        username : "Aryan",
        password : "123123",
        age : 21,
        city : "Delhi"
    }
})}

updateUser();
