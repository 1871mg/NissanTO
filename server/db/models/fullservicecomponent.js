'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FullServiceComponent extends Model {
   
    static associate({Component, FullService}) {
      FullServiceComponent.belongsTo(FullService),
      FullServiceComponent.belongsTo(Component)
    }
  };
  FullServiceComponent.init({
    FullServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'FullService',
        key: 'id',
      },
    },
    ComponentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Component',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'FullServiceComponent',
  });
  return FullServiceComponent;
};
