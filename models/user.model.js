'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      auth_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
      },

      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user'
      },

      phone: DataTypes.STRING,
      age: DataTypes.INTEGER,

      gender: {
        type: DataTypes.ENUM('male', 'female')
      },

      location: DataTypes.STRING,

      income_bracket: {
        type: DataTypes.ENUM(
          'bottom_40',
          'lower_middle',
          'middle',
          'high'
        )
      },

      farm_size: DataTypes.FLOAT,
      crop_type: DataTypes.STRING,
      mobile_money_number: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: true,
      underscored: true
    }
  );

  return User;
};