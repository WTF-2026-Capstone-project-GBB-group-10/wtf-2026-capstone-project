const jwt = require('jsonwebtoken');
const { FarmerProfile } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = header.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Invalid token format' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

  
    req.user = {
      authId: decoded.authId
    };

   
    const farmer = await FarmerProfile.findOne({
      where: { auth_id: decoded.authId }
    });

    if (farmer) {
      req.user.farmerId = farmer.id;
      req.user.role = farmer.role;
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Unauthorized' });
  }
};