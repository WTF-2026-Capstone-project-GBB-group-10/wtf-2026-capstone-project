const {Listing} = require('../models');

async function createListing(data) {
  return await Listing.create(data);
}

async function getListingById(id) {
  return await Listing.findByPk(id);
}

async function getAllListings() {
  return await Listing.findAll();
}

async function getListingsByUser(user_id) {
  return Listing.findAll({ where: { user_id } });
}

module.exports = {
  createListing,
  getListingById,
  getAllListings,
  getListingsByUser
};
