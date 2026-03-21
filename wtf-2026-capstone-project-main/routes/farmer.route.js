const router = require('express').Router();
const { FarmerProfile } = require('../models');
const authMiddleware = require('../middleware/auth');

router.post('/onboard', authMiddleware, async (req, res) => {
  try {

   
    const existing = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (existing) {
      return res.status(400).json({
        status: "fail",
        message: "Profile already exists"
      });
    }

    const farmer = await FarmerProfile.create({
      auth_id: req.user.authId,
      role: "farmer",
      ...req.body
    });

    return res.status(201).json({
      status: "success",
      message: "Farmer onboarded successfully",
      data: farmer
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

module.exports = router;