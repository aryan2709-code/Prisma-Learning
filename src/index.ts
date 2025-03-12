import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient(); // generate an instance of Prisma Client Class
const app = express();
app.use(express.json())

app.get("/users" , async (req,res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id" , async(req,res) => {
    const id = req.params.id as unknown as number;
    const users = await client.user.findFirst({
        where : {
            id : id
        },
       select : {
            todos : true
        }
    });
    res.json({
        users
    })
})

app.listen(3000);