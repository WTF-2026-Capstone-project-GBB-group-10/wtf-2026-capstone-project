'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Repayments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      loan_id: {
        type: Sequelize.UUID,
        references: { model: 'Loans', key: 'id' }
      },

      amount_paid: Sequelize.FLOAT,
      payment_method: Sequelize.STRING,
      payment_date: Sequelize.DATE,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Repayments');
  }
};

