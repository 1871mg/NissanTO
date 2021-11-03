const orderServices = [
  // { OrderId: 1, ServiceId: 1 },
  // { OrderId: 1, ServiceId: 2 },
  // { OrderId: 1, ServiceId: 3 },
  // { OrderId: 1, ServiceId: 4 },
  // { OrderId: 1, ServiceId: 5 },
  // { OrderId: 1, ServiceId: 19 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < orderServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('OrderServices', [{
        OrderId: orderServices[i].OrderId,
        ServiceId: orderServices[i].ServiceId,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderServices', null, {});
  },
};
