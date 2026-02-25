'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CreditScores', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      user_id: {
        type: Sequelize.UUID,
        references: { model: 'Users', key: 'id' }
      },

      score_value: Sequelize.FLOAT,
      risk_level: Sequelize.ENUM('low','medium','high'),

      satellite_score: Sequelize.FLOAT,
      climate_risk_score: Sequelize.FLOAT,
      mobile_money_score: Sequelize.FLOAT,
      generated_at: Sequelize.DATE,

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('CreditScores');
  }
};

