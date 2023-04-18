import express, { Request, Response } from "express";
import { AuthController } from "../controller/AuthController";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";

// BCRYPT for password
import bcrypt from 'bcrypt';

// MiddleWare
import { verifyToken } from "../middlewares/verifyToken.middleware";

// Body Parser(Read JSON from Body)
import bodyParser = require("body-parser");

// Middleware to read JSON in Body
let jsonParser = bodyParser.json();

// Router from express
let authRouter = express.Router();

authRouter.route('/register')
        .post(jsonParser, async (req: Request, res: Response) => {

            let { name, email, age, password  } = req?.body;
            let hasPassword = '';

            if( name && password && email && age){
                // Obtain the password in request and cypher
                hasPassword = bcrypt.hashSync( password, 10 )

                let newUser: IUser = {
                    name: name, 
                    email: email,
                    age: age,
                    password: hasPassword,
                }
            
                
                // Controller Instance to excute method
                const controller: AuthController = new AuthController();

                // Obtain response
                const response: any = await controller.register(newUser);
            
                return res.status(200).send(response)

            }else{
                return res.status(400).send({
                    message: "[ERROR User Data missing] User can be registered"
                })
             }


        })

authRouter.route('/login')
        .post(jsonParser ,async (req: Request, res: Response) => { 

            let { email, password } = req?.body;

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

            }else{
                return res.status(400).send({
                    message: "[ERROR User Data missing] User can be registered"
                })
            }


        })


// Router protected by verify token middleware
authRouter.route("/me")
      .get(verifyToken, async (req: Request, res: Response) => { 

        //obtain the id of user ti check is data
        let id: any = req?.query?.id;
        if(id) { 
            //controller: auth controller
            const controller: AuthController = new AuthController()
            //obtain response from controller 
            const response: any = await controller.userData(id)
            //if user is authorized  
            return res.status(200).send(response)
        }else{ 
            return res.status(400).send({
                message: "Your are not authorised to perform this action"
            })
        }

      })

export default authRouter; 