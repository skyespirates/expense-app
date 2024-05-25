// db.js
require('dotenv').config()
const mysql = require('mysql2/promise');

// Create the connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust the limit based on your application's needs
    host: process.env.DB_HOST,
    user: process.env.DB_USER, // Your MySQL username
    password: process.env.DB_PWD, // Your MySQL password
    database: process.env.DB_NAME // Your MySQL database name
});
// Export the pool
module.exports = pool;
