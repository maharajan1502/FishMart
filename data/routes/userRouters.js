// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to show all users
router.get('/', userController.getUsers);

// Route to create a user
router.post('/add', userController.createUser);

module.exports = router;
