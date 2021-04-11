const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'remotemysql.com',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'MCWKiOrWYL'
});

module.exports = connection;