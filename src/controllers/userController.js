const userService = require('../services/userService');

// GET all users
async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// GET single user by ID
async function getUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// POST create user
async function createUser(req, res) {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(400).json({ message: 'Login and password are required' });
  }
  try {
    const newUser = await userService.createUser(login, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// PUT update user's password
async function updateUserPassword(req, res) {
  const userId = req.params.id;
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: 'Old password and new password are required' });
  }
  try {
    const updatedUser = await userService.updateUserPassword(userId, oldPassword, newPassword);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// DELETE user
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    await userService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserPassword,
  deleteUser
};