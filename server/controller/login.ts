import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

export async function login(req: Request, res: Response, next: NextFunction) {

    const loginData:AdminUser = req.body;

    try{
        const user = await userData.findUserByName(loginData);

        if (user) {
            const name = user.name;
            const password = user.password;

            const isMatch = await userData.comparePassword(loginData.password, password);

            if (!isMatch) {
                return res.json({
                    message: "Wrong password",
                });
            }

            const tokenUser:AdminUser = {
                name: name,
                password: password
            }

            const token = await userData.generateToken(tokenUser);

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

export async function register(req: Request, res: Response,next: NextFunction) {
    const user:AdminUser = req.body;
    try{
        const _response = await userData.createUser(user);

        if (!_response.affectedRows) {
            res.send("User already exists");
        } else {
            // userData.createUser(name, password);
            res.send("User created");
        }
    }
    catch(e){
        next(e);
    }
}

