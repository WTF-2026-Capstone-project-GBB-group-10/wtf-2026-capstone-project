'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      loan_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      interest_rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 10.0
      },
      first_time_borrower: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      expected_income_increase: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      expected_loss_reduction: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      purpose: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('draft','submitted','approved','rejected','disbursed'),
        defaultValue: 'draft'
      },
      credit_score: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      submitted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      approved_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disbursed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      repayment_period_months: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      disbursement_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};