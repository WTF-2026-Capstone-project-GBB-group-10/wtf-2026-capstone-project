const { Message } = require('../models');
const { Op } = require('sequelize');
const { NotFoundError } = require('../errors/httpError');


exports.sendMessage = async (senderId, data) => {

  return await Message.create({
    sender_id: senderId,
    ...data
  });
};


exports.getConversation = async (userA, userB) => {

  return await Message.findAll({
    where: {
      [Op.or]: [
        { sender_id: userA, receiver_id: userB },
        { sender_id: userB, receiver_id: userA }
      ]
    },
    order: [['createdAt', 'ASC']]
  });

};


exports.markAsRead = async (messageId) => {

  const msg = await Message.findByPk(messageId);

  if (!msg) {
    throw new NotFoundError('Message not found');
  }

  await msg.update({
    read_status: true
  });

  return msg;
};