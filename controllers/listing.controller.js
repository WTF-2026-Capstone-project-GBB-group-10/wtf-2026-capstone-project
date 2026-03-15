const { Listing, FarmerProfile } = require('../models');


exports.createListing = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Farmer profile not found"
      });
    }

    const listing = await Listing.create({
      farmer_id: profile.id,
      ...req.body
    });

    return res.status(201).json({
      message: "Listing created successfully",
      listing
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};



exports.getListings = async (req, res) => {
  try {

    const listings = await Listing.findAll();

    return res.status(200).json({
      listings
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};