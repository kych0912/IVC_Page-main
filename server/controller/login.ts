import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as UserData from "../data/UserDB";

export async function login(req: Request, res: Response, next: NextFunction) {

    const loginData:AdminUser = req.body;

    try{
        const user = await UserData.findUserByName(loginData);

        if (user) {
            const name = user.name;
            const password = user.password;

            const isMatch = await UserData.comparePassword(loginData.password, password);

            if (!isMatch) {
                return res.json({
                    message: "Wrong password",
                });
            }

            const tokenUser:AdminUser = {
                name: name,
                password: password
            }

            const token = await UserData.generateToken(tokenUser);

            res.cookie("x_auth", token,{
                httpOnly: false,
                sameSite:'none',
                secure:process.env.NODE_ENV !== 'development',
            }).status(200).json({ success: true, userId: user.name});

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
        const _response = await UserData.createUser(user);

        if (!_response.affectedRows) {
            res.status(201).send("User already exists");
        } else {
            // UserData.createUser(name, password);
            res.status(200).send("User created");
        }
    }
    catch(e){
        next(e);
    }
}

export async function logOut(req: Request, res: Response,next: NextFunction) {
    try{
        const token = req.cookies.x_auth;
        const _response = await UserData.deleteSession(token);

        if(_response.affectedRows === 0){
            return res.status(400).json({message: "Logout failed",success: false});
        }
        else{
            res.clearCookie("x_auth",{
                path:'/',
                httpOnly: false,
                sameSite:'none',
                secure:process.env.NODE_ENV !== 'development',
            }).status(200).json({message: "Logout success",success: true});
        }
    }
    catch(e){
        next(e);
    }
}
