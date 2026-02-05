
import { generateReply } from '../services/service.ts';
import { Router } from 'express';
import * as process from 'node:process';

const router = Router();

type MessageReponse = {
    user: string,
    bot: string
}
router.post('/', async (req: Request, res: Response) => {
    const data = req.body
    
    if (!data) return res.status(400).json({error: 'Message is require'})
    console.log(data.messages)
    try {
        /* const reply = await generateReply(data.message) */
        const reply = 'Hello there'
        res.status(200).json({
            user: data.messages,
            bot: reply
        });
    } catch (error) {
        return res.status(500).json({error: 'Chatbot error'})
    }
    
})

export default router;