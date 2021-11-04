const orderServices = [
  { OrderId: 5, ServiceId: 13 },
  { OrderId: 6, ServiceId: 26 },
  { OrderId: 7, ServiceId: 39 },
  { OrderId: 8, ServiceId: 52 },
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
