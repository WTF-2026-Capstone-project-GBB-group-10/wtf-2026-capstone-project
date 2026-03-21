// const { CreditScore } = require('../models');
// const generateScore = require('../utils/creditScore.utils');


// exports.generateScore = async (farmerProfileId, loanAmount) => {

 
//   const aiResult = await generateScore(loanAmount);

//   const creditScore = await CreditScore.create({
//     farmer_profile_id: farmerProfileId,
//     score_value: aiResult.score_value,
//     risk_level: aiResult.risk_level,
//     satellite_score: aiResult.satellite_score,
//     climate_risk_score: aiResult.climate_risk_score,
//     mobile_money_score: aiResult.mobile_money_score,
//     generated_at: new Date()
//   });

//   return creditScore;
// };


// exports.getUserScore = async (farmerProfileId) => {

//   return await CreditScore.findOne({
//     where: { farmer_profile_id: farmerProfileId },
//     order: [['createdAt', 'DESC']]
//   });
// };

const { CreditScore } = require('../models');
const calculateScore = require('../utils/creditScore.utils');


function getRiskLevel(score) {
  if (score >= 75) return 'low';
  if (score >= 50) return 'medium';
  return 'high';
}


exports.generateScore = async (farmerProfileId, loanAmount) => {

  const score = calculateScore(loanAmount);
  const riskLevel = getRiskLevel(score);

  const creditScore = await CreditScore.create({
    farmer_profile_id: farmerProfileId,
    score_value: score,
    risk_level: riskLevel,
    satellite_score: null,
    climate_risk_score: null,
    mobile_money_score: null,
    generated_at: new Date()
  });

  return creditScore;
};


exports.getUserScore = async (farmerProfileId) => {

  return CreditScore.findOne({
    where: { farmer_profile_id: farmerProfileId },
    order: [['createdAt', 'DESC']]
  });

};