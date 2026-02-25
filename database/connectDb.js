const connPool = require('../config/dbConnect');
const connectSequelize = require('./connectSequelize.js');

const connectDB = async () => {
  try {
    const connection = await connPool.getConnection();
    connectSequelize();
    console.log("Database connected successfully");
    connection.release();      
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

module.exports = connectDB;

