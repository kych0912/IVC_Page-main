import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

export async function getURL(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await userData.getURLLastest();

        res.status(200).json({message: _response,success: true});
    }
    catch(e){
        next(e);
    }
}

export async function getFile(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await userData.getFileLastest();

        const filename = _response[0].filename;
        const file = __dirname + "/../uploads/" + filename;

        res.download(file);
    }
    catch(e){
        next(e);
    }
}