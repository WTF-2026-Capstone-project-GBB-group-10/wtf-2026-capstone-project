const { Repayment, Loan } = require('../models');
const { NotFoundError } = require('../errors/httpError');


exports.createRepayment = async (data) => {

  const loan = await Loan.findByPk(data.loan_id);

  if (!loan) {
    throw new NotFoundError('Loan not found');
  }

  const repayment = await Repayment.create(data);

  return repayment;
};


exports.getLoanRepayments = async (loanId) => {

  const loan = await Loan.findByPk(loanId);

  if (!loan) {
    throw new NotFoundError('Loan not found');
  }

  return await Repayment.findAll({
    where: { loan_id: loanId },
    order: [['payment_date', 'ASC']]
  });

};