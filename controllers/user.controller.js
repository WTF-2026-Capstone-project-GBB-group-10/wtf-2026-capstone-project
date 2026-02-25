const { User } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ where: { auth_id: req.user.id } });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findOne({ where: { auth_id: req.user.id } });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};