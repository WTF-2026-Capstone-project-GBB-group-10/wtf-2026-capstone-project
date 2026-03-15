require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};

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

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file !== basename &&
      file.endsWith('.js') &&
      file !== 'associations.model.js'
    );
  })
  .forEach(file => {
    const modelFactory = require(path.join(__dirname, file));
    const model = modelFactory(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

console.log('Loaded models:', Object.keys(db));


try {
  const applyAssociations = require('./associations.model');
  applyAssociations(db);
} catch (err) {
  console.warn('Associations not applied:', err.message);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;