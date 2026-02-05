import axios from 'axios';
import dotenv from "dotenv";
import * as process from 'node:process';

/*
curl.exe https://api.groq.com/openai/v1/chat/completions 
-H "Authorization: Bearer gsk_C9mCxtLonyLZg8pa7UtYWGdyb3FYITirGyv -H "Content-Type: application/json" 

-d "{\"model\":\"llama-3.1-8b-instant\",
\"messages\":[{\"role\":\"user\",\"content\":\"Hello, are you working?\"}]}"
 */
export async function generateReply(message: string) {
    try {
        const res = await axios.post(
            process.env.API,
            {
                model: process.env.MODEL,
                messages: [
                    {
                        role: 'user',
                        content: "Hi"               
                    }
                ]
            },
            {
                headers: {
                Authorization: `Bearer ${process.env.TOKEN}`,
                "Content-Type": "application/json"
            }
            }

        )
        console.log(res)
        console.log(res.data.choices[0].message.content);
        return res.data.choices[0].message.content
    } catch (error) {
        console.log(error);
        throw new Error("Error")
    }
}