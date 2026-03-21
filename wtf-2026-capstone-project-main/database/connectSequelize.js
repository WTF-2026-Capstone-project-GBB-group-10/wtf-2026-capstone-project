const { sequelize } = require("../models");

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected successfully");

    await sequelize.sync({ alter: true });
    console.log("All models synced successfully!");
  } catch (error) {
    console.error("Sequelize connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectSequelize;
