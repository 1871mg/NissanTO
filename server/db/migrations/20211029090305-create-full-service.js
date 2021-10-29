'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FullServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: { type: Sequelize.TEXT, allowNull: false },
      duration: { type: Sequelize.TEXT, allowNull: false },
      MilegeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mileges',
          key: 'id',
        },
      },
      ModelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CarModels',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FullServices');
  }
};
