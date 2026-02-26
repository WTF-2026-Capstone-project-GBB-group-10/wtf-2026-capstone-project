'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Loans', 'ai_prediction', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('Loans', 'repay_probability', {
      type: Sequelize.FLOAT,
      allowNull: true
    });

    await queryInterface.addColumn('Loans', 'rule_score', {
      type: Sequelize.FLOAT,
      allowNull: true
    });

    await queryInterface.addColumn('Loans', 'risk_level', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('Loans', 'ai_recommendation', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('Loans', 'ai_action', {
      type: Sequelize.ENUM('approve', 'review', 'decline'),
      allowNull: true
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Loans', 'ai_prediction');
    await queryInterface.removeColumn('Loans', 'repay_probability');
    await queryInterface.removeColumn('Loans', 'rule_score');
    await queryInterface.removeColumn('Loans', 'risk_level');
    await queryInterface.removeColumn('Loans', 'ai_recommendation');
    await queryInterface.removeColumn('Loans', 'ai_action');
  }
};