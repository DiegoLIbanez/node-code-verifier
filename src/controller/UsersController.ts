import { LogSuccess, LogError, LogWarning } from '../utils/logger'
import {Delete, Get, Post, Put, Query, Route, Tags} from 'tsoa'
import { IUserController } from './interfaces'

// ORM - Users Collection
import { deleteUserByID, getAllUser, getUserByID, createUser, updateUser } from '../domain/orm/User.orm'

@Route("/api/users")
@Tags("UserController")

export class UserController implements IUserController {
 
    /**
     * Enpoint to retreive the Users in the Collection "Users" of db
     *  @param {string} id Id of user to retreive (optional)
     * @returns All user o user found by ID
     */
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {

        let response: any = ""; 
        
        if(id){            
            LogSuccess(`[api/users] Get User By ID`)
            response = await getUserByID(id)
            response.password = ""
        }else{
            LogSuccess('[api/users] Get All Users Request')
            response = await getAllUser()

            // response.map((item: any) => {
            //     _id: item.id;
            //     name: item.name;
            //     email: item.email;
            //     password: item.password = ""
            // })
        }

        return response
    }
      /**
     * Enpoint to Delete the User in the Collection "Users" of db
     *  @param {string} id Id of user to delete  (optional)
     * @returns message informing if deletion was correct
     */
    @Delete("/")    
    public async deleteUser(@Query()id?: string): Promise<any> {

        let response: any = "";

        if(id){
            LogSuccess(`[api/users] Delete User By ID`)
            await deleteUserByID(id).then(r => {
                response = {
                    status: 204,
                    message: `Usuario con el id: ${id} eliminado correctamente`
                }
            }) 
        }else{
            LogWarning('[api/users] Delete Users Request')
            response = {
                message: 'Por favor proporciona un ID  para eliminar la Usario de la base de datos'
            }
        }

        return response
    }
    @Put("/")
    public async updateUser(@Query()id: string, user: any): Promise<any> {
        let response: any = '';

        if(id){
            LogSuccess(`[/api/users] Update User By ID: ${id}`)
            await updateUser(id, user).then( r => {
                response = {
                    message: `User with id ${id} updated seccessfully`
                }
            })
        }else{
            LogWarning('[api/users] Update User Resquest WITHOUT ID');
            response = {
                message: 'Por favor proporciona un ID  para actualizar la Usario de la base de datos'
            }
        }
        return response
    }

    

}