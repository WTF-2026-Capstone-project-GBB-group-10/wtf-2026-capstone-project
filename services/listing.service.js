const { Listing, FarmerProfile } = require('../models');
const { NotFoundError } = require('../errors/httpError');


exports.createListing = async (farmerProfileId, data) => {

  const profile = await FarmerProfile.findByPk(farmerProfileId);

  if (!profile) {
    throw new NotFoundError('Farmer profile not found');
  }

  return await Listing.create({
    farmer_id: farmerProfileId,
    ...data
  });
};


exports.getAllListings = async () => {

  return await Listing.findAll({
    order: [['createdAt', 'DESC']]
  });

};


exports.getUserListings = async (farmerProfileId) => {

  return await Listing.findAll({
    where: { farmer_id: farmerProfileId },
    order: [['createdAt', 'DESC']]
  });

};