const { CreditScore } = require('../models');


async function createScore(data) {
  return await CreditScore.create(data);
}


async function getScoreByFarmerProfile(farmer_profile_id) {
  return await CreditScore.findOne({
    where: { farmer_profile_id }
  });
}


async function updateScore(id, data) {
  const score = await CreditScore.findByPk(id);

  if (!score) return null;

  return await score.update(data);
}


module.exports = {
  createScore,
  getScoreByFarmerProfile,
  updateScore
};