import pool from "./mysql";
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import {AdminUser} from "../model/user";
import { rejects } from "assert";

export async function findUserByNameAndPassword (user:AdminUser):Promise<any> {
    const {name, password} = user||{};

    const query = `SELECT * FROM USER WHERE name="${name}" AND password="${password}"`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(result[0]);
          
        });
    });

}

export async function generateToken(user:AdminUser):Promise<any>{

    const {name, password} = user;

    const token = jwt.sign(password.toString(),'secretToken');
    const query = `INSERT INTO session_table VALUES("${token}", "${name}")`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(token);
        });
    });
    
}

export async function createUser (user:AdminUser):Promise<any> {


    const {name, password} = user;

    const salt = await bcrypt.genSalt(saltRounds);
    const saltedPassword = await bcrypt.hash(password, salt);

    const query = `INSERT IGNORE INTO USER(name,password) VALUES("${name}", "${saltedPassword}")`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });
;

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}