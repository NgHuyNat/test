const db = require('../config/database');

const User = {
  getUserById: (id, callback) => {
    const query = 'SELECT * FROM user WHERE user_id = ?';
    db.query(query, [id], callback);
  },

  create: (data, callback) => {
    const query = 'INSERT INTO user (username, phone, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [data.username, data.phone, data.email, data.password], callback);
  },

  findByEmail: (email, callback) => {
    const query = 'SELECT * FROM user WHERE email = ?';
    db.query(query, [email], callback);
  },

  findByPhone: (phone, callback) => {
    const query = 'SELECT * FROM user WHERE phone = ?';
    db.query(query, [phone], callback);
  },

  findById: (id, callback) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    db.query(query, [id], callback);
  },

  update: (data, callback) => {
    const query = 'UPDATE user SET username = ?, phone = ? WHERE id = ?';
    db.query(query, [ data.username, data.phone, data.id], callback);
  },
};

module.exports = User;