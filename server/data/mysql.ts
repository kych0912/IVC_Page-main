const mysql = require('mysql');
const config = require('./config/key');

const conn = mysql.createConnection({
    host : config.IPv4,
    port:config.port,
    user : config.user,
    password : config.password,
    database : config.database
});

export const db = mysql.createConnection(conn);
