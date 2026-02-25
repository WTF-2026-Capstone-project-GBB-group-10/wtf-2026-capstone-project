const router = require('express').Router();
const messageService = require('../services/message.service');
const authMiddleware = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createMessageSchema } = require('../validators/validateData');

router.post('/',
  authMiddleware,
  validate(createMessageSchema),
  async (req, res) => {
    const msg = await messageService.sendMessage(
      req.user.userId,
      req.validatedData
    );
    res.status(201).json(msg);
  }
);

router.get('/conversation/:userId', authMiddleware, async (req, res) => {
  const messages = await messageService.getConversation(
    req.user.userId,
    req.params.userId
  );
  res.json(messages);
});

module.exports = router;