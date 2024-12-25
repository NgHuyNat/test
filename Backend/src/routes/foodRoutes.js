const express = require('express');
const router = express.Router();

const foodController = require('../controllers/foodControllers');

router.get('/food', foodController.getAllfood);
router.post('/createfood', foodController.createfood);
router.put('/food/:id', foodController.updatefood);
router.delete('/food/:id', foodController.deletefood);
router.get('/food/:id', foodController.getFoodById);


module.exports = router;