const router = require('express').Router();
const listingService = require('../services/listing.service');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate'); // ✅ FIXED
const { createListingSchema } = require('../validators/validateData');

// Create listing
router.post('/', auth, validate(createListingSchema), async (req, res) => {
  const listing = await listingService.create(req.user.id, req.validatedData);
  res.status(201).json(listing);
});

// Get all listings
router.get('/', async (req, res) => {
  const listings = await listingService.getAll();
  res.json(listings);
});

// Get single listing
router.get('/:id', async (req, res) => {
  const listing = await listingService.getById(req.params.id);
  res.json(listing);
});

module.exports = router;