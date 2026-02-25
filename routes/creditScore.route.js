const router = require('express').Router();
const creditScoreService = require('../services/creditScore.service');
const auth = require('../middleware/validate');

// Get my credit score
router.get('/me', auth, async (req, res) => {
  const score = await creditScoreService.getByUser(req.user.id);
  res.json(score);
});

// Generate credit score (admin or internal use)
router.post('/generate/:userId', async (req, res) => {
  const score = await creditScoreService.generate(req.params.userId);
  res.status(201).json(score);
});

module.exports = router;