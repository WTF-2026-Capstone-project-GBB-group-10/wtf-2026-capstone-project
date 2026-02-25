const { CreditScore } = require('../models');
const generateScore = require('../utils/creditScore.utils')

exports.generateScore = async (userId, loanAmount) => {
  const score = calculateScore(loanAmount);
  const risk = getRiskLevel(score);

  return CreditScore.create({
    user_id: userId,
    score_value: score,
    risk_level: risk,
    generated_at: new Date()
  });
};

exports.getUserScore = async (userId) => {
  return CreditScore.findOne({
    where: { user_id: userId },
    order: [['createdAt', 'DESC']]
  });
};