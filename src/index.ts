import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class

async function readUser() {
   const user = await client.user.findFirst({
    where : {
        id : 2
    },
    select:{
      todos : true // i can include todos here
    }
})
console.log(user)
}

readUser();
