const { Message } = require('../models');

exports.sendMessage = async (senderId, data) => {
  return Message.create({
    sender_id: senderId,
    ...data
  });
};

exports.getConversation = async (userA, userB) => {
  return Message.findAll({
    where: {
      sender_id: userA,
      receiver_id: userB
    },
    order: [['createdAt', 'ASC']]
  });
};

exports.markAsRead = async (messageId) => {
  const msg = await Message.findByPk(messageId);
  if (!msg) throw new Error('Message not found');

  await msg.update({ read_status: true });
  return msg;
};