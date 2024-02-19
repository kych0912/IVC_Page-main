import {db} from "./mysql";
import {AdminUser} from "../model/user";

export async function findUserByNameAndPassword (name: string, password: string):Promise<any> {
    const query = `SELECT * FROM USER WHERE name = "${name}" AND password = "${password}"`;
    db.query(query,(err: any, result: any) => {
        if (err) throw err;
        return result;
    });
}