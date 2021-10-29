'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: { type: Sequelize.TEXT, allowNull: false },
      parentname: { type: Sequelize.TEXT, allowNull: false },
      lastname: { type: Sequelize.TEXT, allowNull: false },
      email: { type: Sequelize.TEXT, allowNull: false, unique: true },
      password: { type: Sequelize.TEXT, allowNull: false },
      phone: { type: Sequelize.TEXT, allowNull: false, unique: true },
      employeeNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
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
    await queryInterface.dropTable('Admins')
  },
}
