'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarModel extends Model {
    static associate({ Car, FullService }) {
      CarModel.hasMany(Car);
      CarModel.hasMany(FullService);
    }
  }
  Model.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'CarModel',
    },
  );
  return CarModel;
};
