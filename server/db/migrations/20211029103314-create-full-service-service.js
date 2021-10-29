'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FullServiceServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FullServiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'FullServices',
          key: 'id',
        },
      },
      ServiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Services',
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
    await queryInterface.dropTable('FullServiceServices')
  },
}
