const router = require('express').Router();
const loanService = require('../services/loan.service');
const authMiddleware = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createLoanSchema } = require('../validators/validateData');


router.post(
  '/',
  authMiddleware,
  validate(createLoanSchema),
  async (req, res) => {
    const loan = await loanService.createLoan(
      req.user.authId, 
      req.validatedData
    );
    res.status(201).json(loan);
  }
);


router.get('/my', authMiddleware, async (req, res) => {
  const loans = await loanService.getUserLoans(req.user.authId);
  res.json(loans);
});


router.post('/:id/submit', authMiddleware, async (req, res) => {
  const loan = await loanService.submitLoan(
    req.params.id,
    req.user.authId
  );
  res.json(loan);
});



router.patch('/:id/approve', authMiddleware, async (req, res) => {
  const loan = await loanService.approveLoan(req.params.id);
  res.json({ message: 'Loan approved', loan });
});


router.patch('/:id/reject', authMiddleware, async (req, res) => {
  const loan = await loanService.rejectLoan(req.params.id);
  res.json({ message: 'Loan rejected', loan });
});


router.patch('/:id/disburse', authMiddleware, async (req, res) => {
  const loan = await loanService.disburseLoan(req.params.id);
  res.json({ message: 'Loan disbursed', loan });
});

module.exports = router;