import { Request, Response, NextFunction } from "express";
import { AdminUser } from "../model/user";
import * as userData from "../data/db";

const util = {
    success: (status: number, message: string, data: any) => {
        return {
            success:true,
            status:status,
            message:message,
            data:data
        }
    },
    fail: (status: number, message: string) => {
        return {
            success:false,
            status:status,
            message:message
        }
    }
}

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

export async function uploadFile(req: Request, res: Response,next: NextFunction) {
    const file = req.file;

    if(!file){
        return res.status(400).json(util.fail(400,"No file uploaded"));
    }

    try{
        const _response = await userData.insertFilePath(file.path,file.filename);

        res.status(200).json(util.success(200,"File uploaded",file));
    }
    catch(e){
        next(e);
    }

}