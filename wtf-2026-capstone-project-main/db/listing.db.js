const { Listing } = require('../models');


async function createListing(data) {
  return await Listing.create(data);
}


async function getListingById(id) {
  return await Listing.findByPk(id);
}


async function getAllListings() {
  return await Listing.findAll();
}


async function getListingsByFarmer(farmer_id) {
  return await Listing.findAll({
    where: { farmer_id }
  });
}


module.exports = {
  createListing,
  getListingById,
  getAllListings,
  getListingsByFarmer
};