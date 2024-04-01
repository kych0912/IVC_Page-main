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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.register = exports.login = void 0;
const UserData = __importStar(require("../data/UserDB"));
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const loginData = req.body;
        try {
            const user = yield UserData.findUserByName(loginData);
            if (user) {
                const name = user.name;
                const password = user.password;
                const isMatch = yield UserData.comparePassword(loginData.password, password);
                if (!isMatch) {
                    return res.json({
                        message: "Wrong password",
                    });
                }
                const tokenUser = {
                    name: name,
                    password: password
                };
                const token = yield UserData.generateToken(tokenUser);
                res.cookie("x_auth", token, {
                    httpOnly: false,
                    sameSite: 'none',
                    secure: process.env.NODE_ENV !== 'development',
                }).status(200).json({ success: true, userId: user.name });
            }
            else {
                res.json({
                    message: "User not found",
                });
            }
        }
        catch (e) {
            next(e);
        }
    });
}
exports.login = login;
// export async function createSession(req: Request, res: Response) {
function register(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        try {
            const _response = yield UserData.createUser(user);
            if (!_response.affectedRows) {
                res.status(201).send("User already exists");
            }
            else {
                // UserData.createUser(name, password);
                res.status(200).send("User created");
            }
        }
        catch (e) {
            next(e);
        }
    });
}
exports.register = register;
function logOut(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.cookies.x_auth;
            const _response = yield UserData.deleteSession(token);
            if (_response.affectedRows === 0) {
                return res.status(400).json({ message: "Logout failed", success: false });
            }
            else {
                res.clearCookie("x_auth", {
                    path: '/',
                    httpOnly: false,
                    sameSite: 'none',
                    secure: process.env.NODE_ENV !== 'development',
                }).status(200).json({ message: "Logout success", success: true });
            }
        }
        catch (e) {
            next(e);
        }
    });
}
exports.logOut = logOut;
