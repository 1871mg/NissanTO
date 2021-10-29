'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ FullService }) {
      Service.belongsTo(FullService)
    }
  }
  Service.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      FullServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'FullService',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Service',
    }
  )
  return Service
}
