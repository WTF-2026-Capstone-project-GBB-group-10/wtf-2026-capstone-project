const router = require('express').Router();

const farmerProfileService = require('../services/farmerProfile.service');

const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

const { updateUserSchema } = require('../validators/validateData');


router.put(
  '/me',
  auth,
  validate(updateUserSchema),
  async (req, res) => {
    try {

      const updated = await farmerProfileService.updateProfile(
        req.user.authId,
        req.validatedData
      );

      return res.json({
        status: "success",
        profile: updated
      });

    } catch (err) {

      return res.status(500).json({
        status: "error",
        message: err.message
      });

    }
  }
);

module.exports = router;