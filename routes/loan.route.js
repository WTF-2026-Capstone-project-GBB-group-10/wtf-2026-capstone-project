const router = require('express').Router();
const loanService = require('../services/loan.service');
const authMiddleware = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createLoanSchema } = require('../validators/validateData');

router.post('/',
  authMiddleware,
  validate(createLoanSchema),
  async (req, res) => {
    const loan = await loanService.createLoan(
      req.user.userId,
      req.validatedData
    );
    res.status(201).json(loan);
  }
);

router.get('/my', authMiddleware, async (req, res) => {
  const loans = await loanService.getUserLoans(req.user.userId);
  res.json(loans);
});

router.post('/:id/submit', authMiddleware, async (req, res) => {
  const loan = await loanService.submitLoan(
    req.params.id,
    req.user.userId
  );
  res.json(loan);
});

module.exports = router;