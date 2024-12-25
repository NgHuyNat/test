const cart = require('../models/cart');

exports.getAllcart = (req, res) => {
    cart.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
}

exports.createcart = (req, res) => {
    try {
        const { user_id, food_id, quantity, total_price, status } = req.body;
        if (!user_id || !food_id || !quantity || !total_price || !status) {
            return res.status(400).json({
                error: 'Missing required fields: user_id, food_id, quantity, total_price, status'
            });
        }

        const cartData = { user_id, food_id, quantity, total_price, status };

        cart.create(cartData, (err, result) => {
            if (err) {
                console.error('Database error:', err); // Log lỗi database
                return res.status(500).json({ error: 'Database error', details: err });
            }

            // Trả về kết quả thành công
            res.status(201).json({
                message: 'Cart created successfully',
                data: result
            });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

exports.updatecart = (req, res) => {
    const { id } = req.params;
    const { food_id, quantity } = req.body;
    cart.update(id, food_id, quantity, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'cart updated successfully'});
    });
}

exports.deletecart = (req, res) => {
    const { id } = req.params;
    cart.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'cart delete successfully'});
    });
};

exports.updateCartStatus = async (req, res) => {
    const { user_id, status } = req.body;
    const sql = "UPDATE cart SET status = ? WHERE user_id = ?";
    db.query(sql, [status, user_id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: "Cập nhật trạng thái thành công!" });
    });
};


