import pool from "./mysql";
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import {AdminUser} from "../model/user";

export async function findSessionByToken(token:string):Promise<any> {
    const query = `SELECT * FROM session_table WHERE session="${token}"`;

    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.query(query);
        conn.release();
        return rows[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function insertURL (url:string):Promise<any> {

    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const changeSelected = `UPDATE submit_table SET selected=false WHERE selected=true`;
    const query = `INSERT INTO submit_table(url,edit_time,selected) VALUES("${url}", "${date}",true)`;

    try{
        const conn = await pool.getConnection();
        await conn.query(changeSelected);
        const [rows] = await conn.query(query);
        conn.release();
        return rows;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export async function insertFilePath(path: string, filename: string): Promise<any> {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const changeselect = `UPDATE file_table SET selected=false WHERE selected=true`
    const query = `INSERT INTO file_table(time, filename,selected) VALUES("${date}", "${filename}",true)`;

    try {
        const conn = await pool.getConnection();
        await conn.query(changeselect);
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export async function deleteURL(id: number): Promise<any> {
    const query = `DELETE FROM submit_table WHERE seq=${id}`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getURLs (): Promise<any> {
    const query = `SELECT * FROM submit_table ORDER BY seq DESC`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function setURLSelected (id:number):Promise<any>{
    const changeselect = `UPDATE submit_table SET selected=false WHERE selected=true`
    const query = `UPDATE submit_table SET selected=true WHERE seq=${id}`;

    try {
        const conn = await pool.getConnection();
        await conn.query(changeselect);
        const [result] = await conn.query(query);
        conn.release();
        return result;
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

export async function getFiles():Promise<any>{
    const query = `SELECT * FROM file_table ORDER BY time DESC`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function setFileSelected(id: number): Promise<any> {
    const changeselect = `UPDATE file_table SET selected=false WHERE selected=true`
    const query = `UPDATE file_table SET selected=true WHERE seq=${id}`;

    try {
        const conn = await pool.getConnection();
        await conn.query(changeselect);
        const [result] = await conn.query(query);
        conn.release();
        return result;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getFileBySeq(seq: number): Promise<any> {
    const query = `SELECT * FROM file_table WHERE seq=${seq}`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function deleteFile(id: number): Promise<any> {
    const getNamequery = `SELECT * FROM file_table WHERE seq=${id}`;
    const query = `DELETE FROM file_table WHERE seq=${id}`;

    try {
        const conn = await pool.getConnection();
        const [fileRow] = await conn.query(getNamequery);
        const [result] = await conn.query(query);
        conn.release();
        return [fileRow,result];
    } catch (err) {
        console.error(err);
        throw err;
    }
}

