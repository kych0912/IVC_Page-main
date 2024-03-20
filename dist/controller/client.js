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
exports.Auth = exports.getFile = exports.getURL = void 0;
const userData = __importStar(require("../data/db"));
const ClientDB = __importStar(require("../data/ClientDB"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getURL(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _response = yield ClientDB.getURLSelected();
            res.status(200).json({ message: _response, success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getURL = getURL;
function getFile(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _response = yield ClientDB.getFileSelected();
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
exports.getFile = getFile;
function Auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.cookies.x_auth;
            const _response = yield userData.findSessionByToken(token);
            if (!_response) {
                return res.status(401).json({ message: "Auth Failed", success: false });
            }
            res.status(200).json({ message: "Auth Success", success: true });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.Auth = Auth;
