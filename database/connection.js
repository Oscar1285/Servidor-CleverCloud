// DATABASE
// importamos modulo de mysql
const mysql = require('mysql2');

const db_connection = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'proyecto',
  port: process.env.MYSQL_ADDON_PORT || 3306,
  connectionLimit: 10
});

db_connection.getConnection(err => {
  if (err) throw err;
  console.log("Conexion a la DB correcta!");
});

exports.db_connection = db_connection;