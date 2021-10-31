const serviceFullServices = [
  { serviceId: 1, FullServiceId: 1 },
  { serviceId: 2, FullServiceId: 1 },
  { serviceId: 3, FullServiceId: 2 },
  { serviceId: 4, FullServiceId: 2 },
  { serviceId: 1, FullServiceId: 3 },
  { serviceId: 2, FullServiceId: 3 },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < serviceFullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServiceServices', [{
        FullServiceId: serviceFullServices[i].FullServiceId,
        ServiceId: serviceFullServices[i].serviceId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceServices', null, {});
  },
};
