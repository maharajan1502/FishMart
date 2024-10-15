// controllers/userController.js
const User = require('./model/userModel');

// Show all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('user', { users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, password,mobilenumber } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.redirect('/users');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
