const router = require('express').Router();
const repaymentService = require('../services/repayment.service');

const authMiddleware = require('../middleware/auth');
const validate = require('../middleware/validate');

const { createRepaymentSchema } = require('../validators/validateData');


router.post(
  '/',
  authMiddleware,
  validate(createRepaymentSchema),
  async (req, res) => {
    try {

      const repayment = await repaymentService.createRepayment(
        req.validatedData
      );

      return res.status(201).json({
        status: "success",
        repayment
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