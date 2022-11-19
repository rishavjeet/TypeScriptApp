//Update made on trial1
import express,{Request,Response} from 'express';
import {json} from 'body-parser';
import { errorHandler } from './middleware/errorHandler';
import { NotFoundErr } from './errors/notFoundErr';
import { newUserRoute } from './routes/userSignIn';
const app = express();
app.use(json());
app.use(newUserRoute);
app.get('*',(req:Request,res:Response)=>{
    throw new NotFoundErr('Invalid Request');
})
app.use(errorHandler);
app.listen(9000,()=>console.log('Server App is up and Listening'));