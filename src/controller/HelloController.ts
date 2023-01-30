import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloControler } from "./interfaces";
import { LogSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloControler {
    @Get("/")

    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] GET Request');

        return {
            message: `Hello, ${name || "World!"}`
        }
    }

}