const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userControllers');
const authenticateToken = require('../middlewares/authenticateToken');

// Đăng ký người dùng
router.post('/signup', registerUser);

// Đăng nhập người dùng
router.post('/login', loginUser);

// router.get('/profile', authenticateToken, getUserProfile);
// router.put('/profile', authenticateToken, updateUserProfile);

module.exports = router;