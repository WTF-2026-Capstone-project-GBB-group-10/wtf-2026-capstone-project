const { Message } = require('../models');

exports.sendMessage = async (req, res) => {
  try {
    const message = await Message.create({ sender_id: req.user.userId, ...req.body });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const messages = await Message.findAll({
      where: { sender_id: req.user.userId, receiver_id: receiverId }
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
