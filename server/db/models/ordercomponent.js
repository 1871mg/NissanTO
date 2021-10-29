'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class OrderComponent extends Model {
    static associate({ Order, Component }) {
      OrderComponent.belongsTo(Order)
      OrderComponent.belongsTo(Component)
    }
  }
  OrderComponent.init(
    {
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id',
        },
      },
      ComponentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Component',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'OrderComponent',
    }
  )
  return OrderComponent
}
