const { Repayment } = require('../models');

exports.makeRepayment = async (req, res) => {
  try {
    const repayment = await Repayment.create(req.body);
    res.status(201).json(repayment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};