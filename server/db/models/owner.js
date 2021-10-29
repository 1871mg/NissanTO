'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate({ Car }) {
      Owner.hasMany(Car)
    }
  }
  Owner.init(
    {
      firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      parentname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Owner',
    }
  )
  return Owner
}
