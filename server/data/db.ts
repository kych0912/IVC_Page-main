const mysql = require('mysql');
const config = require('./config/key');

const conn = mysql.createConnection({
    host : config.IPv4,
    port:config.port,
    user :'ivcadmin',
    password:'IVCinha1997!',
    database:'ivc'
});

conn.connect();

export const db = conn;
