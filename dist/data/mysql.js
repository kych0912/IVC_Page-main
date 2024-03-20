"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2/promise');
const key_1 = require("../config/key");
const pool = mysql.createPool({
    host: key_1.key.IPv4,
    port: key_1.key.port,
    user: key_1.key.user,
    password: key_1.key.password,
    database: key_1.key.database,
});
exports.default = pool;
