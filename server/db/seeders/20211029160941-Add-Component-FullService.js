const componentFullServices = [
  { componentId: 1, FullServiceId: 1 },
  { componentId: 2, FullServiceId: 1 },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < componentFullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServiceComponents', [{
        FullServiceId: componentFullServices[i].FullServiceId,
        ComponentId: componentFullServices[i].componentId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceComponents', null, {});
  },
};
