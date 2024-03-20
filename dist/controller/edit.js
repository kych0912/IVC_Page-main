"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = exports.getFileBySeq = exports.getFiles = exports.selectFile = exports.getURLs = exports.selectURL = exports.deleteFile = exports.deleteURL = exports.editURL = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const userData = __importStar(require("../data/db"));
const util = {
    success: (status, message, data) => {
        return {
            success: true,
            status: status,
            message: message,
            data: data
        };
    },
    fail: (status, message) => {
        return {
            success: false,
            status: status,
            message: message
        };
    }
};
function editURL(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = req.body.url;
        if (!url) {
            return res.status(400).json(util.fail(400, "No url inserted"));
        }
        try {
            const _response = yield userData.insertURL(url);
            res.status(200).json({ message: "URL inserted", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.editURL = editURL;
function deleteURL(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const _response = yield userData.deleteURL(id);
            res.status(200).json({ message: "URL deleted", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteURL = deleteURL;
function deleteFile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const _response = yield userData.deleteFile(id);
            const fileName = _response[0][0].filename;
            fs_1.default.unlinkSync(path_1.default.join(__dirname, './../uploads/') + fileName);
            res.status(200).json({ message: "File deleted", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.deleteFile = deleteFile;
function selectURL(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const _response = yield userData.setURLSelected(id);
            res.status(200).json({ message: "URL selected", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.selectURL = selectURL;
function getURLs(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _response = yield userData.getURLs();
            res.status(200).json({ message: _response, success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getURLs = getURLs;
function selectFile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const _response = yield userData.setFileSelected(id);
            res.status(200).json({ message: "File selected", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.selectFile = selectFile;
function getFiles(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _response = yield userData.getFiles();
            res.status(200).json({ message: _response, success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getFiles = getFiles;
function getFileBySeq(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const seq = Number(req.params.seq);
        try {
            const _response = yield userData.getFileBySeq(seq);
            const filename = _response[0].filename;
            const filePath = path_1.default.join(__dirname, "..", "uploads", filename);
            ;
            fs_1.default.access(filePath, fs_1.default.constants.F_OK, (err) => {
                if (err) {
                    console.error("File doesn't exist.");
                    return res.status(404).send('File not found');
                }
                res.download(filePath, encodeURIComponent(filename), (downloadError) => {
                    if (downloadError) {
                        console.error("Error downloading the file.");
                        next(downloadError);
                    }
                    else {
                        console.log("File successfully sent to client.");
                    }
                });
            });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getFileBySeq = getFileBySeq;
function uploadFile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = req.body.file;
        const name = req.body.name;
        if (!file) {
            return res.status(400).json(util.fail(400, "No file uploaded"));
        }
        const base64ToArray = file.split(";base64,");
        const fileData = base64ToArray[1];
        const fileName = name;
        const filePath = path_1.default.join(__dirname, './../uploads/') + fileName;
        
        fs_1.default.writeFileSync(filePath, fileData, { encoding: 'base64' });
        if (!file) {
            return res.status(400).json(util.fail(400, "No file uploaded"));
        }
        try {
            const _response = yield userData.insertFilePath(filePath, fileName);
            res.status(200).json(util.success(200, "File uploaded", true));
        }
        catch (e) {
            next(e);
        }
    });
}
exports.uploadFile = uploadFile;
