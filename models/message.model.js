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

      sender_id: DataTypes.UUID,
      receiver_id: DataTypes.UUID,
      listing_id: DataTypes.UUID,

      message_text: DataTypes.TEXT,

      read_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'Messages',
      timestamps: true,
      underscored: false
    }
  );

  return Message;
};