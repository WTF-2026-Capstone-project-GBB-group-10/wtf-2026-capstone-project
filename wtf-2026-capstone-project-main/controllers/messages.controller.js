const { Message, FarmerProfile } = require('../models');
const { Op } = require('sequelize');


exports.sendMessage = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Farmer profile not found"
      });
    }

    const message = await Message.create({
      sender_id: profile.id,
      receiver_id: req.body.receiver_id,
      listing_id: req.body.listing_id,
      message_text: req.body.message_text
    });

    return res.status(201).json({
      message: "Message sent successfully",
      messageData: message
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};



exports.getConversation = async (req, res) => {
  try {

    const profile = await FarmerProfile.findOne({
      where: { auth_id: req.user.authId }
    });

    if (!profile) {
      return res.status(404).json({
        message: "Farmer profile not found"
      });
    }

    const { receiverId } = req.params;

    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { sender_id: profile.id, receiver_id: receiverId },
          { sender_id: receiverId, receiver_id: profile.id }
        ]
      },
      order: [['created_at', 'ASC']]
    });

    return res.status(200).json({
      messages
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message
    });

  }
};