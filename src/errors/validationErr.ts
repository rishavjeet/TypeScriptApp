import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";
export class ValidationReqError extends CustomError{
    statusCode: number = 400;
    constructor(public error:ValidationError[]){
        super('Req Validation Failed');
        Object.setPrototypeOf(this,ValidationReqError);
    }
    serializeErr(){
        return this.error.map((err)=>{
            return {
                message:err.msg,
                field:err.param
            }
        })
    }
}