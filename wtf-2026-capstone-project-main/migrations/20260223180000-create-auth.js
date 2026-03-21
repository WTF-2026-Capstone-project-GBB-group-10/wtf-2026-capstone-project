'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Auth', {

      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },

      password: {
        type: Sequelize.STRING,
        allowNull: true
      },

      verification_token: {
        type: Sequelize.STRING,
        allowNull: true
      },

      verification_token_expires: {
        type: Sequelize.DATE,
        allowNull: true
      },

      reset_token: {
        type: Sequelize.STRING,
        allowNull: true
      },

      reset_token_expires: {
        type: Sequelize.DATE,
        allowNull: true
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
    await queryInterface.dropTable('Auth');
  }
};