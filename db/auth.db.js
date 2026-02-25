const { User } = require('../models');

async function registerUser(data) {
  return await User.create(data);
}

async function getUserByEmail(email) {
  return await User.findOne({ where: { email } });
}

async function getUserById(id) {
  return await User.findByPk(id);
}

module.exports = { createUser, getUserByEmail,registerUser };