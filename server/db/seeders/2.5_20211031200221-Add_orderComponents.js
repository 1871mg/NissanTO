const orderComponents = [
  { OrderId: 1, ComponentId: 1 },
  { OrderId: 2, ComponentId: 2 },
  { OrderId: 3, ComponentId: 3 },
  { OrderId: 4, ComponentId: 4 },
  { OrderId: 5, ComponentId: 5 },
  { OrderId: 6, ComponentId: 1 },
  { OrderId: 7, ComponentId: 2 },
  { OrderId: 8, ComponentId: 3 },
  { OrderId: 9, ComponentId: 4 },
  { OrderId: 10, ComponentId: 5 },
  { OrderId: 10, ComponentId: 6 },
  { OrderId: 10, ComponentId: 7 },
];

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
