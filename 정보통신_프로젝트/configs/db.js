//db와 커넥션 시켜주기
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'info_prj'
});

connection.connect();

module.exports = connection;
