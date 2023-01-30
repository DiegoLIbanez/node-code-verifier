import express, { Express, Request, Response } from "express";

// Security 
import cors from 'cors';
import helmet from 'helmet';

// Root Router
import rootRouter from '../routes';

// Create Express APP
const server: Express = express();

// Define SERVER tu use /api
server.use('/api', rootRouter);

// Static server
server.use(express.static('public'));

// TODO Mongoose connection

// Security Config
server.use(helmet());
server.use(cors());

server.use(express.urlencoded({extended: true,  limit: '50mb'}));
server.use(express.json({limit: '50mb'}));

// Redirection Config
server.use('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;