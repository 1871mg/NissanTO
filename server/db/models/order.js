const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({
      Car,
      Worker,
      Box,
      FullService,
      Milege,
      OrderService,
      OrderComponent,
      Component,
      Service,
    }) {
      Order.belongsTo(Car);
      Order.belongsTo(Worker);
      Order.belongsTo(Box);
      Order.belongsTo(FullService);
      Order.belongsTo(Milege);
      Order.belongsToMany(Component, { through: OrderComponent });
      Order.belongsToMany(Service, { through: OrderService });
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
    },
  );
  return Order;
};
