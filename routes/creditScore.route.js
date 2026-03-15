const router = require('express').Router();

const creditScoreService = require('../services/creditScore.service');
const authMiddleware = require('../middleware/auth');


router.get('/me', authMiddleware, async (req, res) => {
  try {

    const score = await creditScoreService.getByFarmerProfile(req.user.profileId);

    return res.json({
      status: "success",
      score
    });

  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

router.post('/generate/:profileId', async (req, res) => {
  try {

    const score = await creditScoreService.generateScore(
      req.params.profileId
    );

    return res.status(201).json({
      status: "success",
      score
    });

  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

module.exports = router;