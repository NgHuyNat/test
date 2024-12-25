const db = require('../config/database');

const cart = {
    getAll: (callback) => {
        db.query('SELECT * FROM cart', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO cart (user_id, food_id, quantity, total_price, status) VALUES (?, ?, ?, ?, ?)',
             [data.user_id, data.food_id, data.quantity, data.total_price, data.status], callback);
    },
    update: (data, callback) => {
        db.query('UPDATE cart SET user_id = ?, food_id =?, quantity = ?, total_price = ?, status = ? WHERE id = ?',
             [data.user_id, data.food_id, data.quantity, data.total_price, data.status], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM cart WHERE id = ?', [id], callback);
    }
};

module.exports = cart;