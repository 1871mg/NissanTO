const boxes = ['Box 1'];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < boxes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Boxes', [{
        title: boxes[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Boxes', null, {});
  },
};
