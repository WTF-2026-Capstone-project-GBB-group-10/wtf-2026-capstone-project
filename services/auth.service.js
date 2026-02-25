const { Auth, FarmerProfile } = require('../models');
const { hashPassword, comparePassword } = require('../utils/password.utils');
const { generateToken } = require('../utils/jwt.utils');

exports.signup = async ({ email, password }) => {

  const existing = await Auth.findOne({ where: { email } });
  if (existing) {
    throw new Error('Email already registered');
  }

  const hashed = await hashPassword(password);

  const auth = await Auth.create({
    email,
    password: hashed
  });

  const profile = await FarmerProfile.findOne({
  where: { auth_id: auth.id }
});

const token = generateToken({
  authId: auth.id,
  role: profile?.role || 'farmer'
});
};

exports.login = async ({ email, password }) => {
  const auth = await Auth.findOne({ where: { email } });
  if (!auth) throw new Error('Invalid credentials');

  const valid = await comparePassword(password, auth.password);
  if (!valid) throw new Error('Invalid credentials');

  const token = generateToken({ authId: auth.id });

  return { token };
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