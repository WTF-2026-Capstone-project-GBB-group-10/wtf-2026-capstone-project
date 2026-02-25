'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Repayment extends Model {
    static associate(models) {
      // 🔗 Each repayment belongs to a loan
      Repayment.belongsTo(models.Loan, {
        foreignKey: 'loan_id',
        as: 'loan',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

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

      amount_paid: DataTypes.FLOAT,
      payment_method: DataTypes.STRING,
      payment_date: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Repayment',
      tableName: 'Repayments',
      timestamps: true,      // ✅ because createdAt exists
      underscored: false     // ✅ because camelCase timestamps
    }
  );

  return Repayment;
};