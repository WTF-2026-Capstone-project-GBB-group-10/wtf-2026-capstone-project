'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      farmer_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      crop_type: {
        type: DataTypes.STRING,
        allowNull: false
      },

      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },

      location: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Listing',
      tableName: 'Listings',
      timestamps: true,
      underscored: true
    }
  );

  return Listing;
};