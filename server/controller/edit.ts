import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
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

    if(!url){
        return res.status(400).json(util.fail(400,"No url inserted"));
    }

    try{
        const _response = await userData.insertURL(url);

        res.status(200).json({message: "URL inserted",success: true});
    }
    catch(e){
        next(e);
    }
}

export async function selectURL(req: Request, res: Response,next: NextFunction) {
    const id = req.body.id;
    try{
        const _response = await userData.setURLSelected(id);

        res.status(200).json({message: "URL selected",success: true});
    }
    catch(e){
        next(e);
    }
}

export async function getURLs(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await userData.getURLs();

        res.status(200).json({message: _response,success: true});
    }
    catch(e){
        next(e);
    }
}


export async function uploadFile(req: Request, res: Response,next: NextFunction) {
    const file:string = req.body.file;

    if(!file){
        return res.status(400).json(util.fail(400,"No file uploaded"));
    }

    const base64ToArray = file.split(";base64,");
    const extension = "docx";

    const fileData = base64ToArray[0];
    const fileName = (new Date().getTime() / 1000|0) + '.' + extension;
    const filePath = path.join(__dirname, './../uploads/') + fileName;

    fs.writeFileSync(filePath, fileData,  { encoding: 'base64' });

    if(!file){
        return res.status(400).json(util.fail(400,"No file uploaded"));
    }

    try{
        const _response = await userData.insertFilePath(filePath,fileName);

        res.status(200).json(util.success(200,"File uploaded",true));
    }
    catch(e){
        next(e);
    }

}