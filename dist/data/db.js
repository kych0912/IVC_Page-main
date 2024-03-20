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
exports.deleteFile = exports.getFileBySeq = exports.setFileSelected = exports.getFiles = exports.setURLSelected = exports.getURLs = exports.deleteURL = exports.insertFilePath = exports.insertURL = exports.findSessionByToken = void 0;
const mysql_1 = __importDefault(require("./mysql"));
const saltRounds = 10;
function findSessionByToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM session_table WHERE session="${token}"`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [rows] = yield conn.query(query);
            conn.release();
            return rows[0];
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.findSessionByToken = findSessionByToken;
function insertURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const changeSelected = `UPDATE submit_table SET selected=false WHERE selected=true`;
        const query = `INSERT INTO submit_table(url,edit_time,selected) VALUES("${url}", "${date}",true)`;
        try {
            const conn = yield mysql_1.default.getConnection();
            yield conn.query(changeSelected);
            const [rows] = yield conn.query(query);
            conn.release();
            return rows;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.insertURL = insertURL;
function insertFilePath(path, filename) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const changeselect = `UPDATE file_table SET selected=false WHERE selected=true`;
        const query = `INSERT INTO file_table(dir, time, filename,selected) VALUES("${path}", "${date}", "${filename}",true)`;
        try {
            const conn = yield mysql_1.default.getConnection();
            yield conn.query(changeselect);
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
exports.insertFilePath = insertFilePath;
;
function deleteURL(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `DELETE FROM submit_table WHERE seq=${id}`;
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
exports.deleteURL = deleteURL;
function getURLs() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM submit_table ORDER BY seq DESC`;
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
exports.getURLs = getURLs;
function setURLSelected(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const changeselect = `UPDATE submit_table SET selected=false WHERE selected=true`;
        const query = `UPDATE submit_table SET selected=true WHERE seq=${id}`;
        try {
            const conn = yield mysql_1.default.getConnection();
            yield conn.query(changeselect);
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
exports.setURLSelected = setURLSelected;
function getFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM file_table ORDER BY time DESC`;
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
exports.getFiles = getFiles;
function setFileSelected(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const changeselect = `UPDATE file_table SET selected=false WHERE selected=true`;
        const query = `UPDATE file_table SET selected=true WHERE seq=${id}`;
        try {
            const conn = yield mysql_1.default.getConnection();
            yield conn.query(changeselect);
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
exports.setFileSelected = setFileSelected;
function getFileBySeq(seq) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `SELECT * FROM file_table WHERE seq=${seq}`;
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
exports.getFileBySeq = getFileBySeq;
function deleteFile(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const getNamequery = `SELECT * FROM file_table WHERE seq=${id}`;
        const query = `DELETE FROM file_table WHERE seq=${id}`;
        try {
            const conn = yield mysql_1.default.getConnection();
            const [fileRow] = yield conn.query(getNamequery);
            const [result] = yield conn.query(query);
            conn.release();
            return [fileRow, result];
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.deleteFile = deleteFile;
