// 'use strict';
// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class FarmerProfile extends Model {}

//   FarmerProfile.init(
//     {
//       id: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4
//       },

//       auth_id: {
//         type: DataTypes.UUID,
//         allowNull: false
//       },

//       first_name: DataTypes.STRING,
//       last_name: DataTypes.STRING,
//       phone: DataTypes.STRING,
//       location: DataTypes.STRING
//     },
//     {
//       sequelize,
//       modelName: 'FarmerProfile',
//       tableName: 'FarmerProfiles',
//       timestamps: true,
//       underscored: true
//     }
//   );

//   return FarmerProfile;
// };
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class FarmerProfile extends Model {}

  FarmerProfile.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },

      auth_id: {
        type: DataTypes.UUID,
        allowNull: false
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      gender: {
        type: DataTypes.STRING
      },

      country: {
        type: DataTypes.STRING
      },

      city: {
        type: DataTypes.STRING
      },

      role: {
        type: DataTypes.STRING
      },

      phone: {
        type: DataTypes.STRING
      },

      location: {
        type: DataTypes.STRING
      }

    },
    {
      sequelize,
      modelName: 'FarmerProfile',
      tableName: 'FarmerProfiles',
      timestamps: true,
      underscored: true
    }
  );

  return FarmerProfile;

};