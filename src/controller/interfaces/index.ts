import { BasicResponse } from "../types";

export interface IHelloControler {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUserController {
    // Read all users from database
    getUsers(id?: string): Promise <any>;
    // Delete By ID
    deleteUser(id?: string): Promise<any>;
    // Create new User
    createUser(user: any): Promise<any>
    // Update User
    updateUser(id: string, user: any): Promise<any>
}