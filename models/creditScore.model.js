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

      farmer_profile_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      score_value: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      risk_level: {
        type: DataTypes.ENUM('low', 'medium', 'high')
      },

      satellite_score: {
        type: DataTypes.FLOAT
      },

      climate_risk_score: {
        type: DataTypes.FLOAT
      },

      mobile_money_score: {
        type: DataTypes.FLOAT
      }
    },
    {
      sequelize,
      modelName: 'CreditScore',
      tableName: 'CreditScores',
      timestamps: true,
      underscored: true
    }
  );

  return CreditScore;
};