'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FullServiceService extends Model {
    static associate() {}
  }
  FullServiceService.init(
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
      modelName: 'FullServiceService',
    }
  )
  return FullServiceService
}
