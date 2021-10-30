const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate({
      Owner, CarModel, Milege, Order,
    }) {
      Car.belongsTo(Owner);
      Car.belongsTo(CarModel);
      Car.belongsTo(Milege);
      Car.hasMany(Order);
    }
  }
  Car.init(
    {
      OwnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Owner',
          key: 'id',
        },
      },
      CarModelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CarModel',
          key: 'id',
        },
      },
      stateNumber: { type: DataTypes.INTEGER, allowNull: false, unique: true },
      yearIssue: { type: DataTypes.INTEGER, allowNull: false },
      MilegeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Milege',
          key: 'id',
        },
      },
    },

    {
      sequelize,
      modelName: 'Car',
    },
  );
  return Car;
};
