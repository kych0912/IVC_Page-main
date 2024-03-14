import pool from "./mysql";
import bcrypt from 'bcrypt';
const saltRounds = 10;
import jwt from 'jsonwebtoken';
import {AdminUser} from "../model/user";

export async function findUserByName(user: AdminUser): Promise<any> {
    const { name } = user;
    const query = `SELECT * FROM USER WHERE name="${name}"`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return result[0];
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function comparePassword(password: string, hash: string): Promise<any> {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function generateToken(user: AdminUser): Promise<any> {
    const { name } = user;
    const token = jwt.sign(name.toString(), 'secretToken');
    const query = `INSERT INTO session_table VALUES("${token}", "${name}")`;

    try {
        const conn = await pool.getConnection();
        const [result] = await conn.query(query);
        conn.release();
        return token;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function createUser(user: AdminUser): Promise<any> {
    const { name, password } = user;
    const salt = await bcrypt.genSalt(saltRounds);
    const saltedPassword = await bcrypt.hash(password, salt);
    const query = `INSERT IGNORE INTO USER(name,password) VALUES("${name}", "${saltedPassword}")`;

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

export async function deleteSession(token: string): Promise<any> {
    const query = `DELETE FROM session_table WHERE session="${token}"`;

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
