'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditScores', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      farmer_profile_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'FarmerProfiles',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      score_value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      risk_level: {
        type: Sequelize.ENUM('low','medium','high')
      },

      satellite_score: {
        type: Sequelize.FLOAT
      },

      climate_risk_score: {
        type: Sequelize.FLOAT
      },

      mobile_money_score: {
        type: Sequelize.FLOAT
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('CreditScores');
  }
};