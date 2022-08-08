const mysql = require('mysql');

const db      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'shopDB',
    multipleStatements: true,
    debug    :  false
});  
module.exports = db;