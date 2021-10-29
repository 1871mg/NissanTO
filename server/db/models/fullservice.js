const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FullService extends Model {
    static associate({
      Milege,
      CarModel,
      Order,
      Service,
      FullServiceComponent,
      FullServiceService,
      Component,
    }) {
      FullService.belongsToMany(Service, { through: FullServiceService });
      FullService.hasOne(Milege);
      FullService.belongsTo(CarModel);
      FullService.hasMany(Order);
      FullService.belongsToMany(Component, { through: FullServiceComponent });
    }
  }
  FullService.init(
    {
      title: { type: DataTypes.TEXT, allowNull: false },
      duration: { type: DataTypes.TEXT, allowNull: false },
      MilegeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Milege',
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
    },
    {
      sequelize,
      modelName: 'FullService',
    },
  );
  return FullService;
};
