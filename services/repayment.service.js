const { Repayment, Loan } = require('../models');

exports.createRepayment = async (data) => {
  const loan = await Loan.findByPk(data.loan_id);
  if (!loan) throw new Error('Loan not found');

  return Repayment.create(data);
};

exports.getLoanRepayments = async (loanId) => {
  return Repayment.findAll({
    where: { loan_id: loanId }
  });
};