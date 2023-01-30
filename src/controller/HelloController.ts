import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class HelloController implements IHelloControler {
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] GET Request');

        return {
            message: `Hello, ${name || "World!"}`
        }
    }

}