'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      auth_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true, 
        references: {
          model: 'Auth',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },

      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
          type: Sequelize.ENUM('admin', 'user'),
          defaultValue: 'user'
      },

      phone: Sequelize.STRING,
      age: Sequelize.INTEGER,
      gender: Sequelize.ENUM('male', 'female'),
      location: Sequelize.STRING,

      income_bracket: Sequelize.ENUM(
        'bottom_40',
        'lower_middle',
        'middle',
        'high'
      ),

      farm_size: Sequelize.FLOAT,
      crop_type: Sequelize.STRING,
      mobile_money_number: Sequelize.STRING,

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};