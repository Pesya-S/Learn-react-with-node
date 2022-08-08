const mysql = require('mysql');

const database='recipeDB'

const db      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database :database,
    multipleStatements: true,
    debug    :  false
});  
module.exports = {db,database};