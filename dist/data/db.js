"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql = require('mysql');
const config = require('./config/key');
const conn = mysql.createConnection({
    host: config.IPv4,
    port: config.port,
    user: 'ivcadmin',
    password: 'IVCinha1997!',
    database: 'ivc'
});
conn.connect();
exports.db = conn;
