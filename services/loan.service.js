const { Loan } = require('../models');
const { assessLoan } = require("./ai.service");

// CREATE LOAN
exports.createLoan = async (userId, data) => {
  if (!userId) {
    throw new Error("Missing userId from auth middleware");
  }

  let aiResult = null;

  try {
    aiResult = await assessLoan(data);
  } catch (err) {
    console.error("AI SERVICE DOWN:", err.message);
  }

  const loan = await Loan.create({
    user_id: userId, 
    status: 'draft',
    ...data,

    ai_prediction: aiResult?.ml_prediction || null,
    repay_probability: aiResult?.repay_probability || null,
    rule_score: aiResult?.rule_score || null,
    risk_level: aiResult?.risk_level || null,
    ai_recommendation: aiResult?.recommendation || null,
    ai_action: aiResult?.action || "review"
  });

  return loan;
};


// GET USER LOANS
exports.getUserLoans = async (userId) => {
  return Loan.findAll({
    where: { user_id: userId },
    order: [['created_at', 'DESC']]
  });
};


// SUBMIT
exports.submitLoan = async (loanId, userId) => {
  const loan = await Loan.findOne({
    where: { id: loanId, user_id: userId }
  });

  if (!loan) throw new Error('Loan not found');

  await loan.update({
    status: 'submitted',
    submitted_at: new Date()
  });

  return loan;
};


// ADMIN ACTIONS (unchanged)
exports.approveLoan = async (id) => {
  const loan = await Loan.findByPk(id);
  await loan.update({ status: 'approved', approved_at: new Date() });
  return loan;
};

exports.rejectLoan = async (id) => {
  const loan = await Loan.findByPk(id);
  await loan.update({ status: 'rejected' });
  return loan;
};

exports.disburseLoan = async (id) => {
  const loan = await Loan.findByPk(id);
  await loan.update({ status: 'disbursed', disbursed_at: new Date() });
  return loan;
};