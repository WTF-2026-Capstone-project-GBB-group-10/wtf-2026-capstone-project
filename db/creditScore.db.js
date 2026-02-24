const {CreditScore} = require('../models');

async function createScore(data) {
  return await CreditScore.create(data);
}

async function getScoreByUser(user_id) {
  return await CreditScore.findOne({ where: { user_id } });
}

async function updateScore(id, data) {
  const score = await CreditScore.findByPk(id);
  if (!score) return null;
  return score.update(data);
}

module.exports = {
  createScore,
  getScoreByUser,
  updateScore
};
