const orders = [
  {
    CarId: 1, WorkerId: 1, BoxId: 1, FullServiceId: 1, timeStart: '2021-11-01 09:00:00', isComplite: false,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < orders.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Orders', [{
        CarId: orders[i].CarId,
        WorkerId: orders[i].WorkerId,
        BoxId: orders[i].BoxId,
        FullServiceId: orders[i].FullServiceId,
        timeStart: orders[i].timeStart,
        isComplite: orders[i].isComplite,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
