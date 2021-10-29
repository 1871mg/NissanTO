'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    static associate({Car}) {
      Model.hasMany(Car)
    }
  }
  Model.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Model',
    }
  )
  return Model
}
