import { IUser } from "../../domain/interfaces/IUser.interface";
import { BasicResponse } from "../types";

export interface IHelloControler {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUserController {
    // Read all users from database
    getUsers(id?: string): Promise <any>;
    // Delete By ID
    deleteUser(id?: string): Promise<any>;
    // Update User 
    updateUser(id: string, user: any): Promise<any>
}

export interface IAuthController {
    // register users
    register(user: IUser): Promise<any>
    // Login user
    loginUser(auth: any): Promise<any>
}