const orders = [
  {
    CarId: 1, WorkerId: 1, BoxId: 1, FullServiceId: 1, timeStart: '2021-11-01 09:00:00', MilegeId: 1, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 2, WorkerId: 2, BoxId: 2, FullServiceId: 10, timeStart: '2021-11-02 09:00:00', MilegeId: 2, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 3, WorkerId: 3, BoxId: 3, FullServiceId: 19, timeStart: '2021-11-03 09:00:00', MilegeId: 3, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 4, WorkerId: 4, BoxId: 1, FullServiceId: 28, timeStart: '2021-11-04 09:00:00', MilegeId: 4, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 5, WorkerId: 5, BoxId: 2, FullServiceId: 37, timeStart: '2021-11-05 09:00:00', MilegeId: 5, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 6, WorkerId: 1, BoxId: 3, FullServiceId: 6, timeStart: '2021-11-01 09:00:00', MilegeId: 6, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 7, WorkerId: 2, BoxId: 1, FullServiceId: 14, timeStart: '2021-11-02 09:00:00', MilegeId: 7, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 8, WorkerId: 3, BoxId: 2, FullServiceId: 22, timeStart: '2021-11-03 09:00:00', MilegeId: 8, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 9, WorkerId: 4, BoxId: 3, FullServiceId: 30, timeStart: '2021-11-04 09:00:00', MilegeId: 3, isComplite: false,
  }, {
    // eslint-disable-next-line max-len
    CarId: 10, WorkerId: 5, BoxId: 1, FullServiceId: 38, timeStart: '2021-11-05 09:00:00', MilegeId: 5, isComplite: false,
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
        MilegeId: orders[i].MilegeId,
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
