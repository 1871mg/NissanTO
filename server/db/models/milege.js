'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milege extends Model {
    
    static associate({Car}) {
    Milege.hasMany(Car)
    }
  };
  Milege.init({
    distanse: { type: DataTypes.INTEGER, allowNull: false },
    years: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Milege',
  });
  return Milege;
};
