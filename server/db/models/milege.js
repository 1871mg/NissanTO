'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milege extends Model {
    static associate({ Car, FullService, Order }) {
      Milege.hasMany(Car)
      Milege.hasOne(FullService)
      Milege.hasMany(Order)
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
