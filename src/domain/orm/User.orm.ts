import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";

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
export const getUserByID = async(id: string): Promise <any | undefined> => {
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