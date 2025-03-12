import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class

async function readUser() {
   const user = await client.user.findFirst({
    where : {
        id : 2
    }
})
console.log(user?.password)
}

readUser();
