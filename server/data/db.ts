import pool from "./mysql";
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import {AdminUser} from "../model/user";
import { rejects } from "assert";

export async function findUserByName(user:AdminUser):Promise<any> {
    const {name, password} = user;

    const query = `SELECT * FROM USER WHERE name="${name}"`;

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

export function comparePassword(password:string, hash:string):Promise<any>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, isMatch) => {
            if(err) reject(err);
            resolve(isMatch);
        });
    });
}

export async function generateToken(user:AdminUser):Promise<any>{

    const {name, password} = user;

    const token = jwt.sign(name.toString(),'secretToken');
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

export async function insertURL (url:string):Promise<any> {

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `INSERT INTO submit_table(url,edit_time) VALUES("${url}", "${date}")`;

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

export async function getURLLastest():Promise<any> {
    const query = `SELECT * FROM submit_table ORDER BY edit_time DESC LIMIT 1`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(result);
        });
    }
    );
}

export async function getFileLastest():Promise<any> {
    const query = `SELECT * FROM file_table ORDER BY time DESC LIMIT 1`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

export async function insertFilePath(path:string, filename:string):Promise<any> {

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = `INSERT INTO file_table(dir,time,filename) VALUES("${path}", "${date}", "${filename}")`;

    const conn = await pool.getConnection((err:any) => {
        if(err) rejects(err);
        console.log('Connection established');
    });

    return new Promise((resolve, reject) => {
        pool.query(query, (err: any, result: any) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};
