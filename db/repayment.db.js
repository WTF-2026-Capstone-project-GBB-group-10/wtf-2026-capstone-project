const { Repayment } = require('../models');


async function createRepayment(data) {
  return await Repayment.create(data);
}


async function getRepaymentById(id) {
  return await Repayment.findByPk(id);
}


async function getRepaymentsByLoan(loan_id) {
  return await Repayment.findAll({
    where: { loan_id },
    order: [['payment_date', 'ASC']]
  });
}


async function getAllRepayments() {
  return await Repayment.findAll({
    order: [['payment_date', 'DESC']]
  });
}


module.exports = {
  createRepayment,
  getRepaymentById,
  getRepaymentsByLoan,
  getAllRepayments
};