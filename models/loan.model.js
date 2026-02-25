'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {}

  Loan.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },

      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      loan_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      interest_rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 10.0
      },

      first_time_borrower: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },

      expected_income_increase: DataTypes.FLOAT,
      expected_loss_reduction: DataTypes.FLOAT,
      purpose: DataTypes.STRING,

      status: {
        type: DataTypes.ENUM(
          'draft',
          'submitted',
          'approved',
          'rejected',
          'disbursed'
        ),
        defaultValue: 'draft'
      },

      credit_score: DataTypes.INTEGER,

      submitted_at: DataTypes.DATE,
      approved_at: DataTypes.DATE,
      disbursed_at: DataTypes.DATE,

      repayment_period_months: DataTypes.INTEGER,
      disbursement_date: DataTypes.DATE,
      due_date: DataTypes.DATE,

      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'Loan',
      tableName: 'Loans',
      timestamps: false,
      underscored: true
    }
  );

  return Loan;
};