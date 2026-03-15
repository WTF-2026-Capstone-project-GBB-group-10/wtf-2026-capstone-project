const { Auth, FarmerProfile } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signup = async (req, res) => {

  const { email } = req.body;

  const existingUser = await Auth.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({
      message: "Email already registered"
    });
  }

  const token = Math.floor(100000 + Math.random() * 900000).toString();

  await Auth.create({
    email,
    verification_token: token,
    verification_token_expires: new Date(Date.now() + 10 * 60 * 1000)
  });

  res.status(201).json({
    message: "Verification token sent to email",
    token
  });

};


exports.verifyToken = async (req, res) => {

  const { email, token } = req.body;

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  if (user.verification_token !== token) {
    return res.status(400).json({
      message: "Invalid token"
    });
  }

  if (new Date() > user.verification_token_expires) {
    return res.status(400).json({
      message: "Token expired"
    });
  }

  res.json({
    message: "Token verified successfully"
  });

};


exports.enterPassword = async (req, res) => {

  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match"
    });
  }

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await user.update({
    password: hashedPassword,
    verification_token: null,
    verification_token_expires: null
  });

  res.json({
    message: "Password created successfully"
  });

};

// exports.basicDetails = async (req, res) => {

//   const { firstName, lastName, gender, country, city, role } = req.body;

//   res.json({
//     message: "Basic details saved successfully",
//     data: {
//       firstName,
//       lastName,
//       gender,
//       country,
//       city,
//       role
//     }
//   });

// };

exports.basicDetails = async (req, res) => {

  const { email, firstName, lastName, gender, country, city, role } = req.body;

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const profile = await FarmerProfile.create({
    auth_id: user.id,
    first_name: firstName,
    last_name: lastName,
    gender,
    country,
    city,
    role
  });

  res.json({
    message: "Profile created successfully",
    profile
  });

};

// exports.success = async (req, res) => {

//   res.json({
//     message: "Account created successfully"
//   });

// };

exports.forgotPassword = async (req, res) => {

  const { email } = req.body;

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const resetToken = Math.floor(100000 + Math.random() * 900000).toString();

  await user.update({
    reset_token: resetToken,
    reset_token_expires: new Date(Date.now() + 10 * 60 * 1000)
  });

  res.json({
    message: "Reset token sent",
    token: resetToken
  });

};

exports.verifyResetToken = async (req, res) => {

  const { email, token } = req.body;

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  if (user.reset_token !== token) {
    return res.status(400).json({
      message: "Invalid reset token"
    });
  }

  if (new Date() > user.reset_token_expires) {
    return res.status(400).json({
      message: "Reset token expired"
    });
  }

  res.json({
    message: "Reset token verified"
  });

};

exports.setPassword = async (req, res) => {

  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match"
    });
  }

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await user.update({
    password: hashedPassword,
    reset_token: null,
    reset_token_expires: null
  });

  res.json({
    message: "Password reset successful"
  });

};

// 

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await Auth.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const profile = await FarmerProfile.findOne({
    where: { auth_id: user.id }
  });

  const token = jwt.sign(
    {
      authId: user.id,
      email: user.email,
      role: profile?.role || "farmer"
    },
    process.env.JWT_SECRET,
    { expiresIn: "5m" }
  );

  res.json({
    message: "Login successful",
    token
  });

};