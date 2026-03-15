const loanService = require('../services/loan.service');



exports.submitLoan = async (req, res) => {
  try {

    const loan = await loanService.submitLoan(
      req.params.id,
      req.user.authId
    );

    return res.status(201).json({
      message: "Loan submitted successfully",
      loan
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};



exports.approveLoan = async (req, res) => {
  try {

    const loan = await loanService.approveLoan(req.params.id);

    return res.status(200).json({
      message: "Loan approved",
      loan
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};


exports.rejectLoan = async (req, res) => {
  try {

    const loan = await loanService.rejectLoan(req.params.id);

    return res.status(200).json({
      message: "Loan rejected",
      loan
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};


exports.disburseLoan = async (req, res) => {
  try {

    const loan = await loanService.disburseLoan(req.params.id);

    return res.status(200).json({
      message: "Loan disbursed successfully",
      loan
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};