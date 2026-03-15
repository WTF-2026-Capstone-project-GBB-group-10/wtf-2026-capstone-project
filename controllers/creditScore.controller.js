const { CreditScore, FarmerProfile } = require('../models');
const axios = require('axios'); 



exports.generateScore = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Farmer profile not found"
      });
    }



    const aiInput = {
      farm_size: profile.farm_size,
      crop_type: profile.crop_type,
      income_bracket: profile.income_bracket,
      age: profile.age,
      country: profile.country
    };



    const aiResponse = await axios.post(
      process.env.AI_SERVICE_URL,   // e.g http://localhost:8000/predict
      aiInput
    );

    const {
      score_value,
      risk_level,
      satellite_score,
      climate_risk_score,
      mobile_money_score
    } = aiResponse.data;


    

    const creditScore = await CreditScore.create({
      farmer_profile_id: profile.id,
      score_value,
      risk_level,
      satellite_score,
      climate_risk_score,
      mobile_money_score
    });


    return res.status(201).json({
      message: "AI credit score generated successfully",
      creditScore
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};