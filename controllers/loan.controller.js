const { Loan } = require('../models');

exports.createLoan = async (req, res) => {
  try {
    const loan = await Loan.create({ user_id: req.user.userId, ...req.body });
    res.status(201).json(loan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({ where: { user_id: req.user.userId } });
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};