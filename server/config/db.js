const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'UBC$tephen0503',
    database: 'realThoughts_db'
});

module.exports = pool.promise();