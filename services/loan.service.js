const { Loan } = require('../models');
const generateCreditScore = require('../utils/creditScore.utlis');

exports.createLoan = async (userId, data) => {
  return Loan.create({
    user_id: userId,
    ...data
  });
};

exports.getUserLoans = async (userId) => {
  return Loan.findAll({
    where: { user_id: userId },
    order: [['created_at', 'DESC']]
  });
};

exports.submitLoan = async (loanId, userId) => {
  const loan = await Loan.findOne({ where: { id: loanId, user_id: userId } });
  if (!loan) throw new Error('Loan not found');

  const score = calculateScore(loan.loan_amount);

  await loan.update({
    status: 'submitted',
    credit_score: score,
    submitted_at: new Date()
  });

  return loan;
};

exports.approveLoan = async (loanId) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Loan not found');

  await loan.update({
    status: 'approved',
    approved_at: new Date()
  });

  return loan;
};

exports.disburseLoan = async (loanId) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Loan not found');

  await loan.update({
    status: 'disbursed',
    disbursed_at: new Date()
  });

  return loan;
};