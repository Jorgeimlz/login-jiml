const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login_bd',
  password: 'familia4',
  port: 5432,
});

module.exports = pool;
