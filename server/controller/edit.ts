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

export async function deleteURL(req: Request, res: Response,next: NextFunction) {
    const id:number = Number(req.params.id);
    try{
        const _response = await userData.deleteURL(id);

        res.status(200).json({message: "URL deleted",success: true});
    }
    catch(e){
        next(e);
    }
}

export async function deleteFile(req: Request, res: Response,next: NextFunction) {
    const id:number = Number(req.params.id);
    try{
        const _response = await userData.deleteFile(id);

        const fileName = _response[0][0].uploadsname;

        fs.unlinkSync(path.join(__dirname, './../uploads/') + fileName);

        res.status(200).json({message: "File deleted",success: true});
    }
    catch(e){
        next(e);
    }
}

export async function selectURL(req: Request, res: Response,next: NextFunction) {
    const id:number = Number(req.params.id);
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

export async function selectFile(req: Request, res: Response,next: NextFunction) {
    const id:number = Number(req.params.id);
    try{
        const _response = await userData.setFileSelected(id);

        res.status(200).json({message: "File selected",success: true});
    }
    catch(e){
        next(e);
    }
}

export async function getFiles(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await userData.getFiles();

        res.status(200).json({message: _response,success: true});
    }
    catch(e){
        next(e);
    }
}

export async function getFileBySeq(req: Request, res: Response,next: NextFunction) {
    const seq:number = Number(req.params.seq);
    try{
        const _response = await userData.getFileBySeq(seq);

        const filename = _response[0].filename;
        const filePath = path.join(__dirname, "..", "uploads", filename);;

        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error("File doesn't exist.");
                return res.status(404).send('File not found');
            }


            res.download(filePath,encodeURIComponent(filename), (downloadError) => {
                if (downloadError) {
                    console.error("Error downloading the file.");
                    next(downloadError);
                } else {
                    console.log("File successfully sent to client.");
                }
            });
        });
    }
    catch(e){
        next(e);
    }
}

export async function uploadFile(req: Request, res: Response,next: NextFunction) {
    const file:string = req.body.file;
    const name:string = req.body.name;

    if(!file){
        return res.status(400).json(util.fail(400,"No file uploaded"));
    }

    const base64ToArray = file.split(";base64,");

    const fileData = base64ToArray[1];
    const fileName = name;
    const uplaodsName = name + '-' + Date.now()
    const filePath = path.join(__dirname, './../uploads/') + uplaodsName;

    console.log(filePath);

    fs.writeFileSync(filePath, fileData,  { encoding: 'base64' });
``
    try{
        const _response = await userData.insertFilePath(filePath,fileName,uplaodsName);

        res.status(200).json(util.success(200,"File uploaded",true));
    }
    catch(e){
        next(e);
    }

}