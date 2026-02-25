const { CreditScore } = require('../models');

exports.generateScore = async (req, res) => {
  try {
    const score = await CreditScore.create(req.body);
    res.status(201).json(score);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};