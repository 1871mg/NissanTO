const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Milege extends Model {
    static associate({ Car, FullService }) {
      Milege.hasMany(Car);
      Milege.hasOne(FullService);
    }
  }
  Milege.init(
    {
      distanse: { type: DataTypes.INTEGER, allowNull: false },
      years: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Milege',
    },
  );
  return Milege;
};
