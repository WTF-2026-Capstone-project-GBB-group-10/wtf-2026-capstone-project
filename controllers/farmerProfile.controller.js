const { FarmerProfile } = require('../models');
exports.createProfile = async (req, res) => {
  try {

    const existing = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (existing) {
      return res.status(400).json({
        message: "Profile already exists"
      });
    }

    const profile = await FarmerProfile.create({
      auth_id: req.user.authId,
      role: "farmer",
      ...req.body
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getProfile = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    res.json(profile);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateProfile = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    await profile.update(req.body);

    res.json({
      message: "Profile updated successfully",
      profile
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.deleteProfile = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Profile not found"
      });
    }

    await profile.destroy();

    res.json({
      message: "Profile deleted successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};