import { Request, Response } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

export async function login(req: Request, res: Response) {

    const loginData:AdminUser = req.body;
    const user: AdminUser = await userData.findUserByNameAndPassword(loginData);

    if (user) {
        res.status(200).json({
            message: "User found",
        });
    } else {
        res.json({
            message: "User not found",
        });
    }
}

export async function register(req: Request, res: Response) {
    const { name, password } = req.body;
    const user: AdminUser = await userData.createUser(name, password);

    if (user) {
        res.send("User already exists");
    } else {
        // userData.createUser(name, password);
        res.send("User created");
    }
}
