const db = require('../config/database');
const { get } = require('../routes/cartRoutes');

const food = {
    getAll: (callback) => {
        db.query('SELECT * FROM food', callback);
    },
    create: ( type, name, description, price, size, image, status, callback) => {
        db.query('INSERT INTO food ( type, name, description, price, size, image, status) VALUES (?, ?, ?, ?, ?, ?, ?)', [ type, name, description, price, size, image, status], callback);
    },
    update: (id,  type, name, description, price, size, image, status, callback) => {
        db.query('UPDATE food SET type = ?, name = ?, description = ?, price = ?, size = ? , image = ?, status = ?  WHERE id = ?', [ type, name, description, price, size, image, status, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM food WHERE id = ?', [id], callback);
    },
    getFoodById: (id, callback) => {
        db.query('SELECT * FROM food WHERE id = ?', [id], callback);
    }
};

module.exports = food;