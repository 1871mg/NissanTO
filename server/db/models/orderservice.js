const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderService extends Model {
    static associate() {}
  }
  OrderService.init(
    {
      OrderId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      ServiceId: {
        primaryKey: true,
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
    },
  );
  return OrderService;
};
