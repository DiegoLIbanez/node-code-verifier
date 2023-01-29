// Root Router
// Redirections to Routers

import express, {Express, Response, Request} from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '@/utils/logger'

// Server instance
const server: Express = express();

// Router instance
const rootRouter = express.Router()

// Activate for requests to http://localhost:5001/api
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:5001/api/')
    //  send hello world
    const data: string = 'Welcome to my  API Restfull Express + Nodemon + Jest +  TS + Postman + Mongoose';
    res.send({data})
})

// Redirections to Routers & Controllers
server.use('/', rootRouter);
server.use('/hello', helloRouter);
// add more routes to the app

export default server;