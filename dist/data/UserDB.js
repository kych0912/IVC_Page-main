"use strict";
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
exports.deleteSession = exports.createUser = exports.generateToken = exports.comparePassword = exports.findUserByName = void 0;
const mysql_1 = __importDefault(require("./mysql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function findUserByName(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = user;
        const query = `SELECT * FROM USER WHERE name="${name}"`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [result] = yield conn.query(query);
            conn.release();
            return result[0];
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.findUserByName = findUserByName;
function comparePassword(password, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isMatch = yield bcrypt_1.default.compare(password, hash);
            return isMatch;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.comparePassword = comparePassword;
function generateToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = user;
        const token = jsonwebtoken_1.default.sign(name.toString(), 'secretToken');
        const query = `INSERT INTO session_table VALUES("${token}", "${name}")`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [result] = yield conn.query(query);
            conn.release();
            return token;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.generateToken = generateToken;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, password } = user;
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const saltedPassword = yield bcrypt_1.default.hash(password, salt);
        const query = `INSERT IGNORE INTO USER(name,password) VALUES("${name}", "${saltedPassword}")`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [result] = yield conn.query(query);
            conn.release();
            return result;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.createUser = createUser;
function deleteSession(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `DELETE FROM session_table WHERE session="${token}"`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [result] = yield conn.query(query);
            conn.release();
            return result;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.deleteSession = deleteSession;
