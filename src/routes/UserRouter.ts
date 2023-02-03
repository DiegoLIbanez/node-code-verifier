import express, { Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

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
    return res.send({response})
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
        return res.send(response)

    })
    // POST
    .post(async (req: Request, res: Response) => {

        let name: any = req?.query?.name;
        let email: any = req?.query?.email;
        let age: any = req?.query?.age;

        // Controller Instance to method
        const controller: UserController = new UserController();

        let user = {
            name: name || 'undefaul',
            email: email || 'undefaul',
            age: age || 'undefault'
        }

        // Obtain Response
        const response: any = await controller.createUser(user)
        // Send to the client the response
        return res.send(response)
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
        res.send(response)
    })

// Export Hello Router
export default usersRouter;