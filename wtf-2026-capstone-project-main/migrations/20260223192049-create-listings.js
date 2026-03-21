'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Listings', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      farmer_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'FarmerProfiles',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

      crop_type: {
        type: Sequelize.STRING,
        allowNull: false
      },

      quantity: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      location: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Listings');
  }
};