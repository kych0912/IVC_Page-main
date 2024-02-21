import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

export async function login(req: Request, res: Response, next: NextFunction) {

    const loginData:AdminUser = req.body;

    try{
        const user: AdminUser = await userData.findUserByNameAndPassword(loginData);

        if (user) {
            const token = await userData.generateToken(user);

            res.cookie("x_auth", token).status(200).json({ loginSuccess: true, userId: user.name});
        } else {
            res.json({
                message: "User not found",
            });
        }
    }
    catch(e)
    {
        next(e);
    }
}

// export async function createSession(req: Request, res: Response) {

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
