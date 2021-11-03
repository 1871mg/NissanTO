const orderComponents = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < orderComponents.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('OrderComponents', [{
        OrderId: orderComponents[i].OrderId,
        ComponentId: orderComponents[i].ComponentId,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderComponents', null, {});
  },
};
