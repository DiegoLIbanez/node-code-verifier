import express, { Express, Request, Response } from "express";

// Swagger
import SwaggerUI from 'swagger-ui-express';


// Security 
import cors from 'cors';
import helmet from 'helmet';

// Root Router
import rootRouter from '../routes';
import mongoose from "mongoose";

// Create Express APP
const server: Express = express();

// Swagger Config and route
server.use('/docs', 
    SwaggerUI.serve,
    SwaggerUI.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
            explorer: true
        }
    }))

// Define SERVER tu use /api
server.use('/api', rootRouter);

// Static server
server.use(express.static('public'));

// TODO Mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/codeverification')

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