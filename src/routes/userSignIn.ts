import express,{Request,Response} from 'express';
import {body, validationResult} from 'express-validator';
import { ValidationReqError } from '../errors/validationErr';
const router = express.Router();
router.post('/newUser',[
    body('email')
    .isEmail()
    .withMessage('Invalid Message'),
    body('password')
    .isLength({min:4,max:8})
    .withMessage('Invalid Password')
],(req:Request,res:Response)=>{
    const {email,password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty())
        throw new ValidationReqError(errors.array())
    res.status(201).send({email,password});
});
export {router as newUserRoute};