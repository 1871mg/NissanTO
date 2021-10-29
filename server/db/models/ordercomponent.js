const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderComponent extends Model {
    static associate() {}
  }
  OrderComponent.init(
    {
      OrderId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id',
        },
      },
      ComponentId: {
        primaryKey: true,
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
    },
  );
  return OrderComponent;
};
