const router = require('express').Router();
const authService = require('../services/auth.service');
const validate = require('../middleware/validate');

const { registerSchema, loginSchema } = require('../validators/validateData');


router.post('/signup', validate(registerSchema), async (req, res) => {
  const result = await authService.signup(req.validatedData);
  res.status(201).json(result);
});


router.post('/login', validate(loginSchema), async (req, res) => {
  const result = await authService.login(req.validatedData);
  res.json(result);
});

module.exports = router;