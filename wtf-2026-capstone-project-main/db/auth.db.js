const { Auth } = require('../models');

async function registerUser(data) {
  return await Auth.create(data);
}

async function getUserByEmail(email) {
  return await Auth.findOne({
    where: { email }
  });
}

async function getUserById(id) {
  return await Auth.findByPk(id);
}

module.exports = {
  registerUser,
  getUserByEmail,
  getUserById
};