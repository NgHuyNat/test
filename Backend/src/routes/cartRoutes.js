const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/cart', cartController.getAllcart);
router.post('/createcart', cartController.createcart);
router.put('/cart/:id', cartController.updatecart);
router.delete('/cart/:id', cartController.deletecart);

module.exports = router;