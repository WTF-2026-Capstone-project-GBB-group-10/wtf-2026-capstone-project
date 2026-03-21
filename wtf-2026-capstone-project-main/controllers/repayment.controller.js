const { Repayment, Loan } = require('../models');


exports.makeRepayment = async (req, res) => {
  try {

    const { loan_id, amount_paid, payment_method, payment_date } = req.body;

    const loan = await Loan.findByPk(loan_id);

    if (!loan) {
      return res.status(404).json({
        message: "Loan not found"
      });
    }

    const repayment = await Repayment.create({
      loan_id,
      amount_paid,
      payment_method,
      payment_date
    });

    return res.status(201).json({
      message: "Repayment recorded successfully",
      repayment
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};