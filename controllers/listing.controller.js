const { Listing } = require('../models');

exports.createListing = async (req, res) => {
  try {
    const listing = await Listing.create({ farmer_id: req.user.userId, ...req.body });
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getListings = async (req, res) => {
  try {
    const listings = await Listing.findAll();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
