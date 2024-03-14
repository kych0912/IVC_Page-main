import pool from "./mysql";
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import {AdminUser} from "../model/user";

export async function getURLSelected(): Promise<any> {
    const query = `SELECT * FROM submit_table WHERE selected=true`;

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

export async function getFileLastest(): Promise<any> {
    const query = `SELECT * FROM file_table ORDER BY time DESC LIMIT 1`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
};