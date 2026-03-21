const { Loan } = require('../models');


async function createLoan(data) {
  return await Loan.create(data);
}


async function getLoanById(id) {
  return await Loan.findByPk(id);
}


async function getLoansByUser(user_id) {
  return await Loan.findAll({
    where: { user_id }
  });
}


async function getAllLoans() {
  return await Loan.findAll();
}


async function updateLoan(id, data) {
  const loan = await Loan.findByPk(id);

  if (!loan) return null;

  return await loan.update(data);
}


module.exports = {
  createLoan,
  getLoanById,
  getLoansByUser,
  getAllLoans,
  updateLoan
};