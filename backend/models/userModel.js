const pool = require('../config/db');

const User = {
  async create(username, hashedPassword) {
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
    const values = [username, hashedPassword];
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
};

module.exports = User;
