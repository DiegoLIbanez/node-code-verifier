/***
 * Basic Json response for controller
 */
export type BasicResponse = {
    message: string
}
/**
 * Error json response for controller
 */

export type ErrorResponse = {
    error: string,
    message: string
}

/***
 * Auth json response for controller
 */
export type AuthResponse = { 
    token: string
    message: string,
    
}