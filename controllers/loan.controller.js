const loanService = require('../services/loan.service');


exports.submitLoan = async (req, res) => {
  const loan = await loanService.submitLoan(
    req.params.id,
    req.user.authId
  );
  res.json(loan);
};


exports.approveLoan = async (req, res) => {
  const loan = await loanService.approveLoan(req.params.id);
  res.json(loan);
};

exports.rejectLoan = async (req, res) => {
  const loan = await loanService.rejectLoan(req.params.id);
  res.json(loan);
};

exports.disburseLoan = async (req, res) => {
  const loan = await loanService.disburseLoan(req.params.id);
  res.json(loan);
};