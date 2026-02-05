import dotenv from "dotenv";
import router from "./routes/router.ts";
import express from 'express';
import * as process from 'node:process';

dotenv.config()

const app = express()
app.use(express.json())

app.use('/chat', router)

app.listen(process.env.PORT, () => {
    console.log(`Chatbot server running on port ${process.env.PORT}`)
})