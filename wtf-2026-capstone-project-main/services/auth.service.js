const { Auth, FarmerProfile } = require('../models');
const { hashPassword, comparePassword } = require('../utils/password.utils');
const { generateToken } = require('../utils/jwt.utils');
const { BadRequestError, UnauthorizedError, NotFoundError } = require('../errors/httpError');


exports.signup = async ({ email }) => {

  const existing = await Auth.findOne({ where: { email } });

  if (existing) {
    throw new BadRequestError('Email already registered');
  }

  const token = Math.floor(100000 + Math.random() * 900000).toString();

  await Auth.create({
    email,
    verification_token: token,
    verification_token_expires: Date.now() + 10 * 60 * 1000
  });

  return {
    message: "Verification token sent",
    token 
  };
};



exports.verifyToken = async ({ email, token }) => {

  const auth = await Auth.findOne({ where: { email } });

  if (!auth) {
    throw new NotFoundError("Account not found");
  }

  if (auth.verification_token !== token) {
    throw new BadRequestError("Invalid token");
  }

  return { message: "Token verified" };
};


exports.enterPassword = async ({ email, password, confirmPassword }) => {

  if (password !== confirmPassword) {
    throw new BadRequestError("Passwords do not match");
  }

  const auth = await Auth.findOne({ where: { email } });

  const hashed = await hashPassword(password);

  await auth.update({
    password: hashed,
    verification_token: null
  });

  return { message: "Password created successfully" };
};



exports.basicDetails = async (data) => {

  const {
    email,
    firstName,
    lastName,
    gender,
    country,
    city,
    role
  } = data;

  const auth = await Auth.findOne({ where: { email } });

  if (!auth) {
    throw new NotFoundError("Account not found");
  }

  const profile = await FarmerProfile.create({
    auth_id: auth.id,
    first_name: firstName,
    last_name: lastName,
    gender,
    country,
    city,
    role
  });

  return profile;
};


exports.login = async ({ email, password }) => {

  const auth = await Auth.findOne({ where: { email } });

  if (!auth) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const valid = await comparePassword(password, auth.password);

  if (!valid) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const profile = await FarmerProfile.findOne({
    where: { auth_id: auth.id }
  });

  const token = generateToken({
    authId: auth.id,
    role: profile?.role || "farmer"
  });

  return {
    token,
    user: {
      id: auth.id,
      email: auth.email
    },
    profile
  };
};