import { HttpException } from "@nestjs/common";


export class ImNotACoffeMachineException extends HttpException {
    constructor(msg: string | Record<string, any>, status: number) {
        super(msg, status);
    }
}