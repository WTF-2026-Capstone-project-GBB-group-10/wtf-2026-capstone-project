'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const tables = await queryInterface.showAllTables();

   
    const tableNames = tables.map(t => 
      typeof t === 'object' ? t.tableName : t
    );

    if (tableNames.includes('Users')) {
      await queryInterface.renameTable('Users', 'FarmerProfiles');
    }

  },

  async down(queryInterface) {

    const tables = await queryInterface.showAllTables();

    const tableNames = tables.map(t => 
      typeof t === 'object' ? t.tableName : t
    );

    if (tableNames.includes('FarmerProfiles')) {
      await queryInterface.renameTable('FarmerProfiles', 'Users');
    }

  }
};