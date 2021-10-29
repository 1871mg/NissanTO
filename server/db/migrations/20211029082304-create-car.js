'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      OwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Owners',
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
      stateNumber: { type: Sequelize.INTEGER, allowNull: false, unique: true },
      yearIssue: { type: Sequelize.INTEGER, allowNull: false },
      MileageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mileges',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cars')
  },
}
