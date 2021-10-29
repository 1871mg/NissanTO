'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component extends Model {
    
    static associate({FullServiceComponent}) {
      Component.hasMany(FullServiceComponent)
    }
  };
  Component.init({
    title: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    counterType: { type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'Component',
  });
  return Component;
};
