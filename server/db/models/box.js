'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    static associate({Order}) {
      Box.hasMany(Order)
    }
  }
  Box.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Box',
    }
  )
  return Box
}
