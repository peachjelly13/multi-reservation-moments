//This file is used to configure knex, a SQL query builder for Node.js
import { type Knex } from "knex";
import {env} from "../config/env.ts"

export default{

    client:"pg",
    connection:{
        connectionString:env.connectionString,
        host:env.host,
        port:env.port,
        user:env.user,
        database:env.database,
        password:env.password
    },
    migrations:{
         directory: 'src/db/migrations'
    },
    seeds:{
        directory: 'src/db/seeds'
    }
} as Knex.Config;
