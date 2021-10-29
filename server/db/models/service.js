'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ FullService, OrderService, FullServiceService, Order }) {
      Service.belongsToMany(FullService, { through:FullServiceService})
      Service.belongsToMany(Order, { through: OrderService })
    }
  }
  Service.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      
    },
    {
      sequelize,
      modelName: 'Service',
    }
  )
  return Service
}
