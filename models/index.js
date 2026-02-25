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


// fs.readdirSync(__dirname)
//   .filter(file => file !== basename && file.endsWith('.model.js'))
//   .forEach(file => {
//     const modelFactory = require(path.join(__dirname, file));
//     const model = modelFactory(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.endsWith('.model.js') &&   //  ONLY real models
      file !== 'associations.model.js' // exclude this
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


console.log('Loaded models:', Object.keys(db));


// const applyAssociations = require('./associations.model');
// applyAssociations(db);
// Load associations AFTER models exist
const applyAssociations = require('./associations.model');
applyAssociations(db);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;