const models = ['Almera (G15)', 'Tiida (C13)', 'Juke (F15)', 'Qashqai (J11)', 'Pathfinder (R52)'];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < models.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('CarModels', [{
        title: models[i],

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CarModels', null, {});
  },
};
