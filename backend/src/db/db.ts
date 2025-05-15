//Database connection file
//This file is used to connect to the postgres database using knex

import {logger} from '../config/logger.ts';
import knexConfig from './knexfile.ts'
import knex from 'knex';


export const db = knex(knexConfig);
export const connectDB = async()=>{
    try {
        await db.raw('SELECT 1+1 AS result');
        logger.info("Database connected successfully");
    } catch (error) {
        logger.error("Database connection failed",error);
        process.exit(1);
    }
}


