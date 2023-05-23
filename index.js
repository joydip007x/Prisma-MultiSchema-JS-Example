import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())

dotenv.config();
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    res.send("Server is Running");
 })
app.post('/user', async (req, res) => {
    const { email, mood } = req.body
    const post = await prisma.User.create({
      data: {  email:email, mood:mood,  },
    })
    res.json(post)
})
app.get('/user', async (req, res) => {
    const post = await prisma.User.findMany({})
    res.json(post)
})
const port= process.env.PORT;
app.listen(port,()=>console.log("Listen to `${port}`"))

/* Prisma AutoComplete or Intellisense fix
-https://stackoverflow.com/questions/72102079/single-instance-prisma-client-autocomplete-not-working */
