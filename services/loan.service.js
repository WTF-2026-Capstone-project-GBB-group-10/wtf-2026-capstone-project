const { Loan } = require('../models');
const calculateScore = require('../utils/creditScore.utils');


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
  const loan = await Loan.findOne({
    where: { id: loanId, user_id: userId }
  });

  if (!loan) throw new Error('Loan not found');

  if (loan.status !== 'draft')
    throw new Error('Only draft loans can be submitted');

  const score = generateCreditScore(loan.loan_amount);

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

  if (loan.status !== 'submitted')
    throw new Error('Loan must be submitted first');

  await loan.update({
    status: 'approved',
    approved_at: new Date()
  });

  return loan;
};


exports.rejectLoan = async (loanId) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Loan not found');

  if (loan.status !== 'submitted')
    throw new Error('Only submitted loans can be rejected');

  await loan.update({
    status: 'rejected'
  });

  return loan;
};


exports.disburseLoan = async (loanId) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Loan not found');

  if (loan.status !== 'approved')
    throw new Error('Loan must be approved first');

  await loan.update({
    status: 'disbursed',
    disbursed_at: new Date()
  });

  return loan;
};