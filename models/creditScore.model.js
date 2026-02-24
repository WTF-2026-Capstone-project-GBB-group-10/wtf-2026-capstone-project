'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CreditScore extends Model {}

  CreditScore.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      score_value: DataTypes.FLOAT,

      risk_level: {
        type: DataTypes.ENUM('low', 'medium', 'high')
      },

      satellite_score: DataTypes.FLOAT,
      climate_risk_score: DataTypes.FLOAT,
      mobile_money_score: DataTypes.FLOAT,

      generated_at: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'CreditScore',
      tableName: 'CreditScores',
      timestamps: true,
      underscored: false
    }
  );

  return CreditScore;
};