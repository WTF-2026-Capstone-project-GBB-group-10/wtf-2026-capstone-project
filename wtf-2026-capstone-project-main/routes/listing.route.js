// const router = require('express').Router();
// const listingService = require('../services/listing.service');
// const auth = require('../middleware/auth');
// const validate = require('../middleware/validate'); // ✅ FIXED
// const { createListingSchema } = require('../validators/validateData');

// // Create listing
// router.post('/', auth, validate(createListingSchema), async (req, res) => {
//   const listing = await listingService.create(req.user.id, req.validatedData);
//   res.status(201).json(listing);
// });

// // Get all listings
// router.get('/', async (req, res) => {
//   const listings = await listingService.getAll();
//   res.json(listings);
// });

// // Get single listing
// router.get('/:id', async (req, res) => {
//   const listing = await listingService.getById(req.params.id);
//   res.json(listing);
// });

// module.exports = router;

const router = require('express').Router();
const listingService = require('../services/listing.service');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

const { createListingSchema } = require('../validators/validateData');


// Create listing
router.post('/', auth, validate(createListingSchema), async (req, res) => {
  try {

    const listing = await listingService.create(
      req.user.profileId,
      req.validatedData
    );

    return res.status(201).json({
      status: "success",
      listing
    });

  } catch (err) {

    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});


// Get all listings
router.get('/', async (req, res) => {
  try {

    const listings = await listingService.getAll();

    return res.json({
      status: "success",
      listings
    });

  } catch (err) {

    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});


// Get single listing
router.get('/:id', async (req, res) => {
  try {

    const listing = await listingService.getById(req.params.id);

    return res.json({
      status: "success",
      listing
    });

  } catch (err) {

    return res.status(500).json({
      status: "error",
      message: err.message
    });
  }
});

module.exports = router;