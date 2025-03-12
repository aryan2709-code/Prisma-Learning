import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class

async function createUser() {
   await client.user.create({
    data : {
        username : "harkirat",
        password : "123123",
        age : 21,
        city : "Delhi"
    }
})}

createUser();
