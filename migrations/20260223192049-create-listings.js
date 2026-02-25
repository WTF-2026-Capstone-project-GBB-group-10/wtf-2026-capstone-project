'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Listings', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      farmer_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE'
      },

      crop_type: Sequelize.STRING,
      quantity: Sequelize.FLOAT,
      price: Sequelize.FLOAT,
      location: Sequelize.STRING,

      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOWa
      },

      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Listings');
  }
};
