import dotenv from 'dotenv'; 
import path from 'path'
dotenv.config({path:'../../.env'});

import express from 'express';
const app = express();

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log('app is listening on the port ..');
})