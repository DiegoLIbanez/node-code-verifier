import express, { Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

// Body Parser to read BODY from requests
import bodyParser from 'body-parser'

let jsonParser = bodyParser.json()

// Router from express
const usersRouter = express.Router()

// http://localhost:8000/api/users/
usersRouter.route('/')
    //GET
    .get(async (req: Request, res: Response) => {
    //Obtain a Query Param(ID)
    let id: any = req?.query.id;
    LogInfo(`Query Param: ${id}`) 
    // Controller Instance to excute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response: any = await controller.getUsers(id)
    // Send to the client the response
    return res.status(200).send({response})
    })
    // DELETE
    .delete(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to excute method
        const controller: UserController = new UserController();
        // Obtain Response
        const response: any = await controller.deleteUser(id);
        // Send to the client the response
        return res.status(200).send(response)

    })
    // PUT
    .put(async (req: Request, res: Response) => {
        // Obtain a Query Param (ID)
        let id: any = req?.query?.id;
        let name: any = req?.query?.name;
        let email: any = req?.query?.email;
        let age: any = req?.query?.age;

        LogInfo(`Query Param: ${id}, ${name}, ${email}, ${age}`);


        // Controller Instance to excute method
        const controller: UserController = new UserController()

        let user = {
            name: name,
            email: email,
            age: age
        }

        //Obtain Response
        const response: any =  await controller.updateUser(id, user) 
        // Send to the client the response
        res.status(200).send(response)
    })

// Export Hello Router
export default usersRouter;

/**
 * 
 * Get Documents => 200 OK
 * Creation Documents => 201 OK
 * Deletion of Documents => 200 (Entity) / 204 (No return)
 * Update of Documents => 200 (Entity) / 204 (No return)
 * 
 */