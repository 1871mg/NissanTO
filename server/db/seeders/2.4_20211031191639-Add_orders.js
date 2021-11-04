const orders = [
  {
    CarId: 1, WorkerId: 1, BoxId: 1, FullServiceId: 1, timeStart: '2021-11-01 09:00:00', isComplite: false,
  }, {
    CarId: 2, WorkerId: 2, BoxId: 1, FullServiceId: 33, timeStart: '2021-11-02 11:00:00', isComplite: false,
  }, {
    CarId: 3, WorkerId: 3, BoxId: 1, FullServiceId: 73, timeStart: '2021-11-03 13:00:00', isComplite: false,
  }, {
    CarId: 4, WorkerId: 4, BoxId: 1, FullServiceId: 113, timeStart: '2021-11-04 15:00:00', isComplite: false,
  }, {
    CarId: 5, WorkerId: 5, BoxId: 1, FullServiceId: 153, timeStart: '2021-11-05 17:00:00', isComplite: false,
  }, {
    CarId: 6, WorkerId: 6, BoxId: 1, FullServiceId: 193, timeStart: '2021-11-08 09:00:00', isComplite: false,
  }, {
    CarId: 7, WorkerId: 7, BoxId: 1, FullServiceId: 233, timeStart: '2021-11-09 11:00:00', isComplite: false,
  }, {
    CarId: 8, WorkerId: 8, BoxId: 1, FullServiceId: 273, timeStart: '2021-11-10 13:00:00', isComplite: false,
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
