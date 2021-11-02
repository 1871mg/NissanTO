const orderServices = [
  { OrderId: 1, ServiceId: 1 },
  { OrderId: 1, ServiceId: 2 },
  { OrderId: 1, ServiceId: 3 },
  { OrderId: 1, ServiceId: 4 },
  { OrderId: 1, ServiceId: 5 },
  { OrderId: 1, ServiceId: 19 },

  { OrderId: 2, ServiceId: 22 },
  { OrderId: 2, ServiceId: 23 },
  { OrderId: 2, ServiceId: 25 },
  { OrderId: 2, ServiceId: 26 },
  { OrderId: 2, ServiceId: 27 },
  { OrderId: 2, ServiceId: 24 },
  { OrderId: 2, ServiceId: 28 },
  { OrderId: 2, ServiceId: 30 },
  { OrderId: 2, ServiceId: 32 },

  { OrderId: 3, ServiceId: 34 },
  { OrderId: 3, ServiceId: 35 },
  { OrderId: 3, ServiceId: 36 },
  { OrderId: 3, ServiceId: 44 },
  { OrderId: 3, ServiceId: 45 },

  { OrderId: 4, ServiceId: 48 },
  { OrderId: 4, ServiceId: 49 },
  { OrderId: 4, ServiceId: 50 },
  { OrderId: 4, ServiceId: 51 },
  { OrderId: 4, ServiceId: 54 },
  { OrderId: 4, ServiceId: 52 },
  { OrderId: 4, ServiceId: 55 },
  { OrderId: 4, ServiceId: 56 },
  { OrderId: 4, ServiceId: 53 },
  { OrderId: 4, ServiceId: 58 },
  { OrderId: 4, ServiceId: 60 },

  { OrderId: 5, ServiceId: 62 },
  { OrderId: 5, ServiceId: 63 },
  { OrderId: 5, ServiceId: 66 },
  { OrderId: 5, ServiceId: 67 },
  { OrderId: 5, ServiceId: 70 },
  { OrderId: 5, ServiceId: 71 },
  { OrderId: 5, ServiceId: 72 },

  { OrderId: 6, ServiceId: 6 },
  { OrderId: 6, ServiceId: 1 },
  { OrderId: 6, ServiceId: 2 },
  { OrderId: 6, ServiceId: 3 },
  { OrderId: 6, ServiceId: 7 },
  { OrderId: 6, ServiceId: 4 },
  { OrderId: 6, ServiceId: 8 },
  { OrderId: 6, ServiceId: 18 },
  { OrderId: 6, ServiceId: 5 },
  { OrderId: 6, ServiceId: 20 },

  { OrderId: 7, ServiceId: 22 },
  { OrderId: 7, ServiceId: 23 },
  { OrderId: 7, ServiceId: 25 },
  { OrderId: 7, ServiceId: 26 },
  { OrderId: 7, ServiceId: 27 },
  { OrderId: 7, ServiceId: 24 },
  { OrderId: 7, ServiceId: 28 },
  { OrderId: 7, ServiceId: 29 },
  { OrderId: 7, ServiceId: 30 },
  { OrderId: 7, ServiceId: 33 },

  { OrderId: 8, ServiceId: 34 },
  { OrderId: 8, ServiceId: 35 },
  { OrderId: 8, ServiceId: 37 },
  { OrderId: 8, ServiceId: 38 },
  { OrderId: 8, ServiceId: 39 },
  { OrderId: 8, ServiceId: 36 },
  { OrderId: 8, ServiceId: 40 },
  { OrderId: 8, ServiceId: 41 },
  { OrderId: 8, ServiceId: 42 },
  { OrderId: 8, ServiceId: 43 },
  { OrderId: 8, ServiceId: 44 },
  { OrderId: 8, ServiceId: 47 },

  { OrderId: 9, ServiceId: 48 },
  { OrderId: 9, ServiceId: 49 },
  { OrderId: 9, ServiceId: 50 },
  { OrderId: 9, ServiceId: 51 },
  { OrderId: 9, ServiceId: 54 },
  { OrderId: 9, ServiceId: 52 },
  { OrderId: 9, ServiceId: 55 },
  { OrderId: 9, ServiceId: 56 },
  { OrderId: 9, ServiceId: 53 },
  { OrderId: 9, ServiceId: 57 },
  { OrderId: 9, ServiceId: 58 },
  { OrderId: 9, ServiceId: 61 },

  { OrderId: 10, ServiceId: 62 },
  { OrderId: 10, ServiceId: 63 },
  { OrderId: 10, ServiceId: 64 },
  { OrderId: 10, ServiceId: 65 },
  { OrderId: 10, ServiceId: 66 },
  { OrderId: 10, ServiceId: 67 },
  { OrderId: 10, ServiceId: 68 },
  { OrderId: 10, ServiceId: 70 },
  { OrderId: 10, ServiceId: 69 },
  { OrderId: 10, ServiceId: 71 },
  { OrderId: 10, ServiceId: 74 },
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
