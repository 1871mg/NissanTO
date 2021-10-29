const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FullServiceComponent extends Model {
    static associate() {}
  }
  FullServiceComponent.init(
    {
      FullServiceId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'FullService',
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
      modelName: 'FullServiceComponent',
    },
  );
  return FullServiceComponent;
};
