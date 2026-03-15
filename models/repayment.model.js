'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Repayment extends Model {}

  Repayment.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      loan_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      amount_paid: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      payment_method: {
        type: DataTypes.STRING
      },

      payment_date: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'Repayment',
      tableName: 'Repayments',
      timestamps: true,
      underscored: true
    }
  );

  return Repayment;
};