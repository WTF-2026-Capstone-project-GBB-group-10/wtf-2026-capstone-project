const router = require('express').Router();
const { FarmerProfile } = require('../models');
const authMiddleware = require('../middleware/auth');

router.post('/onboard', authMiddleware, async (req, res) => {
  try {
  const farmer = await FarmerProfile.create({
  auth_id: req.user.authId,
  role: 'farmer', // force role
  ...req.body
});

    res.status(201).json(farmer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;