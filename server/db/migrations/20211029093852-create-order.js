module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CarId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cars',
          key: 'id',
        },
      },
      WorkerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Workers',
          key: 'id',
        },
      },
      BoxId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Boxes',
          key: 'id',
        },
      },
      FullServiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'FullServices',
          key: 'id',
        },
      },
      timeStart: Sequelize.DATE,
      MilegeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mileges',
          key: 'id',
        },
      },
      isComplite: { type: Sequelize.BOOLEAN, allowNull: false, default: false },
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
    await queryInterface.dropTable('Orders');
  },
};
