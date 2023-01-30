import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "@/utils/logger";

// CRUD

export const GetAllUser = async (): Promise<any[] | undefined> => {
    try {
        const userModel = userEntity()
        // Seach all users
        return await userModel.find({isDelete: false})
    } catch (error) {
       LogError(`[ORM ERROR]: Getting All User: ${error}`) 
    }
}