import express, { Request, Response } from "express";
import { AuthController } from "../controller/AuthController";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";

// BCRYPT for password
import bcrypt from 'bcrypt';


// Router from express
let authRouter = express.Router()

authRouter.route('/auth/register')
        .post(async (req: Request, res: Response) => {

            let { name, email, password, age } = req.body;
            let hasPassword = '';

            if( name && password && email && age){
                // Obtain the password in request and cypher
                hasPassword = bcrypt.hashSync( password, 10 )

                let newUser: IUser = {
                    name, 
                    email,
                    age,
                    password: hasPassword,
                }
            
                
                // Controller Instance to excute method
                const controller: AuthController = new AuthController();

                // Obtain response
                const response: any = await controller.register(newUser);
            
                return res.status(200).send(response)

            }   


        })

authRouter.route('/auth/login')
        .post(async (req: Request, res: Response) => { 

            let { email, password } = req.body;
            let hasPassword = '';

            if( password && email ){
                // Controller Instance to excute method
                const controller: AuthController = new AuthController();

                //TODO use IAuth
                let auth: IAuth = {
                    email,
                    password
                }


                // Obtain response
                const response: any = await controller.loginUser(auth);

                //send to the client the response which includes the JWT 
                return res.status(200).send(response);

            }   


        })

export default authRouter;