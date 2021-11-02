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
      CarModelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CarModels',
          key: 'id',
        },
      },
      stateNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
      yearIssue: { type: Sequelize.INTEGER, allowNull: false },
      MilegeId: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cars');
  },
};
