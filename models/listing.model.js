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

      crop_type: DataTypes.STRING,
      quantity: DataTypes.FLOAT,
      price: DataTypes.FLOAT,
      location: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Listing',
      tableName: 'Listings',
      timestamps: true,
      underscored: false
    }
  );

  return Listing;
};