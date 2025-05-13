import dotenv from "dotenv";
dotenv.config({path:'../../../.env'})
import { type Knex } from "knex";

export default{

    client:"pg",
    connection:{
        connectionString:process.env.connectionString,
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        database:process.env.database,
        password:process.env.password
    },
    migrations:{
         directory: 'src/db/migrations'
    },
    seeds:{
        directory: 'src/db/seeds'
    }
} as Knex.Config;
