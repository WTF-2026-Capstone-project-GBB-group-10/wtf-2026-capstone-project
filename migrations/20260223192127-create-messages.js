'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      sender_id: {
        type: Sequelize.UUID,
        references: { model: 'Users', key: 'id' }
      },

      receiver_id: {
        type: Sequelize.UUID,
        references: { model: 'Users', key: 'id' }
      },

      listing_id: {
        type: Sequelize.UUID,
        references: { model: 'Listings', key: 'id' }
      },

      message_text: Sequelize.TEXT,
      read_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Messages');
  }
};
