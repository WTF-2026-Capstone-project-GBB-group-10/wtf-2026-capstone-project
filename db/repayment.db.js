const {Repayment}  = require('../models');

async function createRepayment(data) {
  return await Repayment.create(data);
}

async function getRepaymentById(id) {
  return await Repayment.findByPk(id);
}

async function getRepaymentsByLoan(loan_id) {
  return Repayment.findAll({ where: { loan_id } });
}

module.exports = {
  createRepayment,
  getRepaymentById,
  getRepaymentsByLoan
};
