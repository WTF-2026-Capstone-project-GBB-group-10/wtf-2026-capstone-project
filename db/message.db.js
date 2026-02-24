const {Message} = require('../models');

async function createMessage(data) {
  return await Message.create(data);
}

async function getMessageById(id) {
  return await Message.findByPk(id);
}

async function getMessagesByListing(listing_id) {
  return Message.findAll({ where: { listing_id } });
}

module.exports = {
  createMessage,
  getMessageById,
  getMessagesByListing
};
