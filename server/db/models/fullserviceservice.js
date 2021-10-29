'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FullServiceService extends Model {
   
    static associate({Service, FullService}) {
      FullServiceService.belongsTo(Service), FullServiceService.belongsTo(FullService)
    }
  };
  FullServiceService.init({
    FullServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FullService',
        key: 'id',
      },
    },
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Service',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'FullServiceService',
  });
  return FullServiceService;
};
