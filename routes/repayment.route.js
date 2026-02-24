const router = require('express').Router();
const repaymentService = require('../services/repayment.service');
const authMiddleware = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createRepaymentSchema } = require('../validators/validateData');

router.post('/',
  authMiddleware,
  validate(createRepaymentSchema),
  async (req, res) => {
    const repayment = await repaymentService.createRepayment(req.validatedData);
    res.status(201).json(repayment);
  }
);

module.exports = router;