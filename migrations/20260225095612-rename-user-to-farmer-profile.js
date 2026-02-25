'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 🔴 1. Remove foreign key constraints first
    await queryInterface.removeConstraint('CreditScores', 'creditscores_ibfk_1')
      .catch(() => console.log('FK not found, skipping'));

    await queryInterface.removeConstraint('Loans', 'loans_ibfk_1')
      .catch(() => console.log('Loans FK skip'));

    await queryInterface.removeConstraint('Listings', 'listings_ibfk_1')
      .catch(() => console.log('Listings FK skip'));

    await queryInterface.removeConstraint('Messages', 'messages_ibfk_1')
      .catch(() => console.log('Messages FK skip'));

    // 🟢 2. Rename Users → FarmerProfiles
    await queryInterface.renameTable('Users', 'FarmerProfiles');

    // 🟢 3. Recreate foreign keys pointing to FarmerProfiles
    await queryInterface.addConstraint('CreditScores', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_credit_farmer',
      references: {
        table: 'FarmerProfiles',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Loans', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_loans_farmer',
      references: {
        table: 'FarmerProfiles',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Listings', {
      fields: ['farmer_id'],
      type: 'foreign key',
      name: 'fk_listings_farmer',
      references: {
        table: 'FarmerProfiles',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface) {
    // rollback rename
    await queryInterface.renameTable('FarmerProfiles', 'Users');
  }
};