import { generateKeySync } from "crypto";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users",function(table){
        
        

    });
};


export async function down(knex: Knex): Promise<void> {
}

