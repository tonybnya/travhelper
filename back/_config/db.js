const mysql = require('mysql2');
const CONFIG = require('../_config/env');

const pool = mysql.createPool({
  host: CONFIG.CONFIG.db_host, 
  user: CONFIG.CONFIG.db_user, 
  password: CONFIG.CONFIG.db_password, 
  database: CONFIG.CONFIG.db_name
}).promise();

module.exports = pool;
