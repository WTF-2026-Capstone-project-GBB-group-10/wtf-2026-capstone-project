const router = require('express').Router();
const authService = require('../services/auth.service');
const validate = require('../middleware/validate');

const { registerSchema, loginSchema } = require('../validators/validateData');

// REGISTER
router.post('/register', validate(registerSchema), async (req, res) => {
  const result = await authService.register(req.validatedData);
  res.status(201).json(result);
});

// LOGIN
router.post('/login', validate(loginSchema), async (req, res) => {
  const result = await authService.login(req.validatedData);
  res.json(result);
});

module.exports = router;