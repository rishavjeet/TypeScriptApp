import { CustomError } from "./custom-error";
export class NotFoundErr extends CustomError{
    statusCode: number = 404;
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,NotFoundErr.prototype);
    }
    serializeErr(){
        return [{message:'Route Not Found'}]
    }
}