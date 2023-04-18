import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.interface";

//ENvironments
import dotenv  from "dotenv"

// BCRYPT from passwords
import bcrypt from 'bcrypt';

// jwt
import jwt from 'jsonwebtoken';

//configuration of environment variables
dotenv.config();

//obtain secret key to generate jwt token
const secret = process.env.SECRET_KEY || "MYSECRETKEY"
// CRUD

// Get all users
export const getAllUser = async (): Promise<any[] | undefined> => {
    try {
        const userModel = userEntity()
        // Seach all users
        return await userModel.find({isDelete: false})
    } catch (error) {
       LogError(`[ORM ERROR]: Getting All User: ${error}`) 
    }
}

// - GET User By ID
export const getUserByID = async(id: string,): Promise <any | undefined> => {
     try {
        const userModels = userEntity();

        // Search User By ID
        return await userModels.findById(id)

     } catch (error) {
        LogError(`[ORM: ERROR] Getting User By ID: ${error}`)
     }
}

// Delete User By ID 
export const deleteUserByID = async(id: string): Promise<any | undefined> => {
   try {
      let userModels = userEntity();
      // Delete User BY ID
      return await userModels.deleteOne({_id: id})
   } catch (error) {
      LogError(`[ORM ERROR]: Deleting User By ID: ${error}`)
   }
}

// Create New Users 
export const createUser = async(user: any): Promise<any | undefined> => {
   try {
      let userModels = userEntity()
      // Create new user
      return await userModels.create(user)
   } catch (error) {
      LogError(`[ORM ERROR]: Creating User: ${error}`)
   }
}

// - Update User By ID
export const updateUser = async(id: string, user: any): Promise<any | undefined> => {
   try {
      
      let userModels = userEntity();
      // Update User
      return await userModels.findByIdAndUpdate(id, user)

   } catch (error) {
      LogError(`[ORM ERROR]: Update User: ${error}`)
   }
}

// Register User
export const registerUser = async( user: IUser ): Promise<any | undefined> => { 
   try {
      let userModel = userEntity();

      // Create / New User register
      return await userModel.create(user)
   } catch (error) {
      LogError(`[ORM ERROR] Register User: ${error}`)
   }
}

// Login User
export const loginUser = async( auth: IAuth ): Promise<any | undefined> => { 
      try {
         let userModel = userEntity();

         let userFound: IUser | undefined = undefined;
         let token = undefined; 
         
         await userModel.findOne({email: auth.email}).then((user: IUser) => {
            userFound = user;
         }).catch((error) => {
            console.log(`[ERRROR Authentication in ORM]: User not found`);
            throw new Error(`[ERRROR Authentication in ORM]: User not found: ${error}`);
         })

         // Check if password is valid(compared with bycrypt)
         let validPassword = bcrypt.compareSync(auth.password, userFound!.password);

         if(!validPassword){
                  // TODO: --> NOT AUTHORISED (404)
                  console.log(`[ERRROR Authentication in ORM]: Password not valid`);
                  throw new Error(`[ERRROR Authentication in ORM]: Password not valid`);
         }

         //generate our jwt token
         token = jwt.sign({email: userFound!.email}, secret, {
            expiresIn: "2h"
         });

         return {user: userFound, token: token} 

      } catch (error) {
         LogError(`[ORM ERROR] Login user: ${error}`);
      };
};

// logout User
export const logoutUser = async(): Promise<any | undefined> => { 
   //TODO: NOT IMPLEMENTED
}