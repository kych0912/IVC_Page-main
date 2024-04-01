const mysql = require('mysql2/promise');
import {key} from '../config/key';

const pool = mysql.createPool({
    host : key.IPv4,
    port:key.port,
    user : key.user,
    password : key.password,
    database : key.database,
});

export default pool;
