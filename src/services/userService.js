const User = require("../models/user");

// In-memory storage for users
let users = [];

// Get all users
function getAllUsers() {
  return Promise.resolve(users);
}

// Get user by ID
function getUserById(userId) {
  const user = users.find(user => user.id === userId);
  return Promise.resolve(user);
}

// Create user
function createUser(login, password) {
  const newUser = new User({
    id: uuid(), // Assuming you have the uuid function available
    login,
    password,
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  users.push(newUser);
  return Promise.resolve(newUser);
}

// Update user's password
function updateUserPassword(userId, oldPassword, newPassword) {
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  const user = users[userIndex];
  if (user.password !== oldPassword) {
    throw new Error('Old password is incorrect');
  }
  user.password = newPassword;
  user.version++;
  user.updatedAt = Date.now();
  return Promise.resolve(user);
}

// Delete user
function deleteUser(userId) {
  users = users.filter(user => user.id !== userId);
  return Promise.resolve();
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserPassword,
  deleteUser
};