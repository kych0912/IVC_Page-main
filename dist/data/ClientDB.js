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
exports.getFileSelected = exports.getURLSelected = void 0;
const mysql_1 = __importDefault(require("./mysql"));
const saltRounds = 10;
function getURLSelected() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM submit_table WHERE selected=true`;
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
exports.getURLSelected = getURLSelected;
function getFileSelected() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM file_table WHERE selected=true`;
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
exports.getFileSelected = getFileSelected;
