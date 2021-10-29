'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, Component}) {
      OrderComponent.belongsTo(Order), OrderComponent.belongsTo(Component)
      // define association here
    }
  };
  OrderComponent.init({
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
    }
  }, {
    sequelize,
    modelName: 'OrderComponent',
  });
  return OrderComponent;
};
