const sequelize = require('./sequelize'); 
const models = require('../models'); 

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log('Sequelize connected successfully');

    Object.values(models).forEach((model) => {
      if (model.associate) {
        model.associate(models); 
      }
    });

    await sequelize.sync({ alter: true });
    console.log('All models synced successfully!');

  } catch (error) {
    console.error('Sequelize connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectSequelize;

