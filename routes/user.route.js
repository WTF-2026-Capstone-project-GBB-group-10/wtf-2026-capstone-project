const router = require('express').Router();
const userService = require('../services/user.service');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { updateUserSchema } = require('../validators/validateData');

router.put('/me',
  auth,
  validate(updateUserSchema),
  async (req, res) => {
    const updated = await userService.updateProfile(
      req.user.authId,
      req.validatedData
    );
    res.json(updated);
  }
);

module.exports = router;