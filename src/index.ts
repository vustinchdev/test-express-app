import express, {Request, Response} from 'express'
import { createServer } from 'node:http'


const PORT = process.env.PORT || 5000

const app = express()
const server = createServer(app)

app.get('/', (req: Request, res: Response) => {
    res.send('it is server');
})

server.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});