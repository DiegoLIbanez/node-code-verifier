import express, { Express, Response,Request } from "express";
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 5001;

// Define the firs Route of APP
app.get('/', (req: Request, res: Response) => { 
    const data: string = "Welcome to my  API Restfull Express + Nodemon + Jest +  TS + Postman + Mongoose"
    res.send({data})
})  

app.get('/hello',  (req: Request, res: Response) => {
    const data: string = 'Welcome to GET Route: ¡Hello!';
    res.send({data})
})

// Execute APP and Listen Requests to PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})