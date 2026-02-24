const { Auth, User } = require('../models');
const { hashPassword, comparePassword } = require('../utils/password.utils');
const { generateToken } = require('../utils/jwt.utils');

exports.register = async ({ email, password }) => {
  const hashed = await hashPassword(password);

  const auth = await Auth.create({ email, password: hashed });

  return { auth };
};


exports.login = async ({ email, password }) => {
  const auth = await Auth.findOne({ where: { email } });
  if (!auth) throw new Error('Invalid credentials');

  const valid = await comparePassword(password, auth.password);
  if (!valid) throw new Error('Invalid credentials');

  const token = generateToken({ authId: auth.id });

  return {
    token,
    user: {
      id: auth.id,
      email: auth.email
    }
  };
};