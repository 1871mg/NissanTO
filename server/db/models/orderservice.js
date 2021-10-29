'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderService extends Model {
    static associate({ Service, Order }) {
      OrderService.belongsTo(Service)
      OrderService.belongsTo(Order)
    }
  }
  OrderService.init(
    {
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id',
        },
      },
      ServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Service',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'OrderService',
    }
  )
  return OrderService
}
