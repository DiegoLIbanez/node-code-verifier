import { BasicResponse } from "../types";

export interface IHelloControler {
    getMessage(name?:string): Promise<BasicResponse>
}