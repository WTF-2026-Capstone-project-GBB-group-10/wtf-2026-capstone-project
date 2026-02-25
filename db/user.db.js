const { FarmerProfile } = require('../models');

async function createProfile(data) {
  return await FarmerProfile.create(data);
}

async function getByUserId(user_id) {
  return await FarmerProfile.findOne({ where: { user_id } });
}

module.exports = { createProfile, getByUserId };