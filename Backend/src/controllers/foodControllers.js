const food = require('../models/food');

exports.getAllfood = (req, res) => {
    food.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createfood = (req, res) => {
    const { type, name, description, price, size, image, status } = req.body;
    food.create(type, name, description, price, size, image, status , (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({message: 'food created successfully'});
    });
};

exports.updatefood = (req, res) => {
    const { id } = req.params;
    const { type, name, description, price, size, image, status } = req.body;
    food.update(id, type, name, description, price, size, image, status , (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'food updated successfully'});
    });
};

exports.deletefood = (req, res) => {
    const { id } = req.params;
    food.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({message: 'food delete successfully'});
    });
};

exports.getFoodById = (req, res) => {
    const { id } = req.params;
    food.getFoodById(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(result);
    });
}