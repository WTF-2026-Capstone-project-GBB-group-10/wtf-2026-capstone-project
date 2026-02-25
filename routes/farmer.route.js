const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const { FarmerProfile } = require('../models');

router.put('/onboarding', authMiddleware, async (req, res) => {
  const farmer = await FarmerProfile.findOne({
    where: { auth_id: req.user.authId }
  });

  if (!farmer) {
    return res.status(404).json({ error: 'Farmer not found' });
  }

  await farmer.update(req.body);

  res.json({
    message: 'Farmer profile updated',
    farmer
  });
});

module.exports = router;