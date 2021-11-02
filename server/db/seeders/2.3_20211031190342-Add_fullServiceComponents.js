const fullServiceComponents = [
  { FullServiceId: 7, ComponentId: 1 },
  { FullServiceId: 15, ComponentId: 2 },
  { FullServiceId: 23, ComponentId: 3 },
  { FullServiceId: 31, ComponentId: 4 },
  { FullServiceId: 39, ComponentId: 5 },
  { FullServiceId: 3, ComponentId: 6 },
  { FullServiceId: 3, ComponentId: 7 },
  { FullServiceId: 11, ComponentId: 6 },
  { FullServiceId: 11, ComponentId: 7 },
  { FullServiceId: 19, ComponentId: 6 },
  { FullServiceId: 19, ComponentId: 7 },
  { FullServiceId: 27, ComponentId: 6 },
  { FullServiceId: 27, ComponentId: 7 },
  { FullServiceId: 35, ComponentId: 6 },
  { FullServiceId: 35, ComponentId: 7 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < fullServiceComponents.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServiceComponents', [{
        FullServiceId: fullServiceComponents[i].FullServiceId,
        ComponentId: fullServiceComponents[i].ComponentId,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceComponents', null, {});
  },
};
