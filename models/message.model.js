'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}

  Message.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      sender_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      receiver_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      listing_id: {
        type: DataTypes.UUID,
        allowNull: true
      },

      message_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      read_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'Message',
      timestamps: true,
      underscored: true
    }
  );

  return Message;
};