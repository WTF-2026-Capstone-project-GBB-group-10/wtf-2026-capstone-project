const { Listing } = require('../models');

exports.createListing = async (userId, data) => {
  return Listing.create({
    farmer_id: userId,
    ...data
  });
};

exports.getAllListings = async () => {
  return Listing.findAll({
    order: [['createdAt', 'DESC']]
  });
};

exports.getUserListings = async (userId) => {
  return Listing.findAll({
    where: { farmer_id: userId }
  });
};