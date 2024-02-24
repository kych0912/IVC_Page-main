import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

export async function editURL(req: Request, res: Response,next: NextFunction) {
    const url = req.body.url;
    try{
        const _response = await userData.insertURL(url);

        res.status(200).json({message: "URL inserted",success: true});
    }
    catch(e){
        next(e);
    }
}
