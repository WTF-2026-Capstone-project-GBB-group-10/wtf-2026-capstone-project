const { FarmerProfile } = require('../models');
const { NotFoundError } = require('../errors/httpError');


exports.getProfile = async (authId) => {

  const profile = await FarmerProfile.findOne({
    where: { auth_id: authId }
  });

  if (!profile) {
    throw new NotFoundError('Farmer profile not found');
  }

  return profile;
};


exports.updateProfile = async (authId, data) => {

  let profile = await FarmerProfile.findOne({
    where: { auth_id: authId }
  });

  if (!profile) {

    profile = await FarmerProfile.create({
      auth_id: authId,
      ...data
    });

    return profile;
  }

  await profile.update(data);

  return profile;
};