'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Car, Worker, Box, FullService, Milege }) {
      Order.belongsTo(Car),
        Order.belongsTo(Worker),
        Order.belongsTo(Box),
        Order.belongsTo(FullService),
        Order.belongsTo(Milege)
    }
  }
  Order.init(
    {
      CarId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Car',
          key: 'id',
        },
      },
      WorkerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Worker',
          key: 'id',
        },
      },
      BoxId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Box',
          key: 'id',
        },
      },
      FullServiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'FullService',
          key: 'id',
        },
      },
      timeStart: DataTypes.DATE,
      MilegeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Milege',
          key: 'id',
        },
      },
      isComplite: { type: DataTypes.BOOLEAN, allowNull: false, default: false },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
