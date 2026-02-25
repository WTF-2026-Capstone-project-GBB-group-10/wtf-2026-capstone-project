'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {}

  Auth.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Auth',
      tableName: 'Auth',
      timestamps: true,
      underscored: true
    }
  );

  return Auth;
};