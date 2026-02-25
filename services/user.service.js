const { User } = require('../models');

exports.getProfile = async (authId) => {
  return await User.findOne({ where: { auth_id: authId } });
};

exports.updateProfile = async (authId, data) => {
  let user = await User.findOne({ where: { auth_id: authId } });


  if (!user) {
    user = await User.create({
      auth_id: authId,
      ...data
    });
    return user;
  }


  await user.update(data);
  return user;
};