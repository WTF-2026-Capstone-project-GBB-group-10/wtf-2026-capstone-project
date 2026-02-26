const router = require('express').Router();
const loanService = require('../services/loan.service');
const authMiddleware = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validate');
const { createLoanSchema } = require('../validators/validateData');


// CREATE LOAN
router.post(
  '/',
  authMiddleware,
  validate(createLoanSchema),
  async (req, res) => {
    const loan = await loanService.createLoan(
      req.user.authId, // ✅ CORRECT
      req.validatedData
    );
    res.status(201).json(loan);
  }
);


// GET MY LOANS
router.get('/my', authMiddleware, async (req, res) => {
  const loans = await loanService.getUserLoans(req.user.authId); // ✅ FIXED
  res.json(loans);
});


// SUBMIT LOAN
router.post('/:id/submit', authMiddleware, async (req, res) => {
  const loan = await loanService.submitLoan(
    req.params.id,
    req.user.authId // ✅ FIXED
  );
  res.json(loan);
});


// ADMIN ACTIONS
router.post('/:id/approve', authMiddleware, admin, async (req, res) => {
  const loan = await loanService.approveLoan(req.params.id);
  res.json(loan);
});

router.post('/:id/reject', authMiddleware, admin, async (req, res) => {
  const loan = await loanService.rejectLoan(req.params.id);
  res.json(loan);
});

router.post('/:id/disburse', authMiddleware, admin, async (req, res) => {
  const loan = await loanService.disburseLoan(req.params.id);
  res.json(loan);
});

module.exports = router;