require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};

/**
 * ===============================
 * DATABASE CONNECTION
 * ===============================
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

/**
 * ===============================
 * LOAD MODELS (*.model.js ONLY)
 * ===============================
 */
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file !== basename &&
      file.endsWith('.model.js')
    );
  })
  .forEach(file => {
    const modelPath = path.join(__dirname, file);
    const model = require(modelPath)(sequelize, Sequelize.DataTypes);

    if (!model || !model.name) {
      console.warn(`⚠️ Skipping invalid model file: ${file}`);
      return;
    }

    db[model.name] = model;
  });

/**
 * ===============================
 * APPLY ASSOCIATIONS SAFELY
 * ===============================
 */
try {
  const applyAssociations = require('./associations');
  applyAssociations(db);
  console.log('✅ Associations loaded');
} catch (err) {
  console.error('❌ Association loading failed:', err.message);
}

/**
 * ===============================
 * EXPORT DB OBJECT
 * ===============================
 */
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;