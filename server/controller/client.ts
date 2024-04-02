import { Request, Response, NextFunction } from "express";
import * as userData from "../data/db";
import * as ClientDB from "../data/ClientDB";
import fs from 'fs'
import path from 'path'

export async function getURL(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await ClientDB.getURLSelected();

        res.status(200).json({message: _response,success: true});
    }
    catch(e){
        next(e);
    }
}

export async function getFile(req: Request, res: Response,next: NextFunction) {
    try{
        const _response = await ClientDB.getFileSelected();


        const uploadsname = _response[0].uploadsname;
        const filename = _response[0].filename;
        const filePath = path.join(__dirname, "..", "uploads", uploadsname);;

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

export async function Auth(req: Request, res: Response,next: NextFunction) {
    try{
        const token:string = req.cookies.x_auth;
        const _response = await userData.findSessionByToken(token);

        if(!_response){
            return res.status(401).json({message: "Auth Failed",success: false});
        }


        res.status(200).json({message: "Auth Success",success: true});
    }
    catch(e){
        next(e);
    }
}