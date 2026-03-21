const { Message } = require('../models');
const { Op } = require('sequelize');


async function createMessage(data) {
  return await Message.create(data);
}


async function getMessageById(id) {
  return await Message.findByPk(id);
}


async function getMessagesByListing(listing_id) {
  return await Message.findAll({
    where: { listing_id },
    order: [['createdAt', 'ASC']]
  });
}


async function getConversation(sender_id, receiver_id) {
  return await Message.findAll({
    where: {
      [Op.or]: [
        { sender_id, receiver_id },
        { sender_id: receiver_id, receiver_id: sender_id }
      ]
    },
    order: [['createdAt', 'ASC']]
  });
}


module.exports = {
  createMessage,
  getMessageById,
  getMessagesByListing,
  getConversation
};