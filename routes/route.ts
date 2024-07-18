import express from 'express';
import { saveSentEmail } from '../controller/email-controller';


const routes = express.Router();


routes.post('/save', saveSentEmail)



export default routes;