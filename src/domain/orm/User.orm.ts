import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.interface";

// BCRYPT from passwords
import bcrypt from 'bcrypt';

// jwt
import jwt from 'jsonwebtoken';

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

         // Find User by email
         userModel.findOne({ email: auth.email }, (err: any, user:IUser) => {

            if(err){
               //TODO: return ERROR --> ERROR while searching(500)
               return err
            }

            if(!user){
               //TODO: return ERROR --> ERROR USER NOT FOUND(404)
            }

            // Use Bcryp to Compare Password 
            let validPassword = bcrypt.compareSync(auth.password, user.password);

            if(!validPassword){
               // TODO: --> NOT AUTHORISED (404)
            }

            // Create JWT
            //TODO: Secret must be in .env
            let token = jwt.sign({email: user.email}, 'MYSECRETWORD', {
               expiresIn: "24h"
            });

            return token;

         })



      } catch (error) {
         LogError(`[ORM ERROR] Login user: ${error}`);
      };
};

// logout User
export const logoutUser = async(): Promise<any | undefined> => { 
   //TODO: NOT IMPLEMENTED
}