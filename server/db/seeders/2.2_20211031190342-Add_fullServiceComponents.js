const fullServiceComponents = [
  // Almera (G15) ТО-1
  { FullServiceId: 1, ComponentId: 1 },
  { FullServiceId: 1, ComponentId: 2 },
  { FullServiceId: 1, ComponentId: 3 },
  { FullServiceId: 1, ComponentId: 4 },
  { FullServiceId: 1, ComponentId: 5 },

  // Almera (G15) ТО-2
  { FullServiceId: 2, ComponentId: 6 },
  { FullServiceId: 2, ComponentId: 1 },
  { FullServiceId: 2, ComponentId: 2 },
  { FullServiceId: 2, ComponentId: 3 },
  { FullServiceId: 2, ComponentId: 7 },
  { FullServiceId: 2, ComponentId: 4 },
  { FullServiceId: 2, ComponentId: 8 },
  { FullServiceId: 2, ComponentId: 5 },

  // Almera (G15) ТО-3
  { FullServiceId: 3, ComponentId: 1 },
  { FullServiceId: 3, ComponentId: 2 },
  { FullServiceId: 3, ComponentId: 3 },
  { FullServiceId: 3, ComponentId: 4 },
  { FullServiceId: 3, ComponentId: 5 },

  // Almera (G15) ТО-4
  { FullServiceId: 4, ComponentId: 9 },
  { FullServiceId: 4, ComponentId: 10 },
  { FullServiceId: 4, ComponentId: 11 },
  { FullServiceId: 4, ComponentId: 12 },
  { FullServiceId: 4, ComponentId: 13 },
  { FullServiceId: 4, ComponentId: 14 },
  { FullServiceId: 4, ComponentId: 15 },
  { FullServiceId: 4, ComponentId: 16 },
  { FullServiceId: 4, ComponentId: 17 },
  { FullServiceId: 4, ComponentId: 1 },
  { FullServiceId: 4, ComponentId: 2 },
  { FullServiceId: 4, ComponentId: 3 },
  { FullServiceId: 4, ComponentId: 18 },
  { FullServiceId: 4, ComponentId: 7 },
  { FullServiceId: 4, ComponentId: 4 },
  { FullServiceId: 4, ComponentId: 8 },
  { FullServiceId: 4, ComponentId: 5 },

  // Almera (G15) ТО-5
  { FullServiceId: 5, ComponentId: 1 },
  { FullServiceId: 5, ComponentId: 2 },
  { FullServiceId: 5, ComponentId: 3 },
  { FullServiceId: 5, ComponentId: 4 },
  { FullServiceId: 5, ComponentId: 5 },

  // Almera (G15) ТО-6
  { FullServiceId: 6, ComponentId: 19 },
  { FullServiceId: 6, ComponentId: 10 },
  { FullServiceId: 6, ComponentId: 1 },
  { FullServiceId: 6, ComponentId: 2 },
  { FullServiceId: 6, ComponentId: 3 },
  { FullServiceId: 6, ComponentId: 7 },
  { FullServiceId: 6, ComponentId: 4 },
  { FullServiceId: 6, ComponentId: 8 },
  { FullServiceId: 6, ComponentId: 5 },

  // Almera (G15) ТО-7
  { FullServiceId: 7, ComponentId: 1 },
  { FullServiceId: 7, ComponentId: 2 },
  { FullServiceId: 7, ComponentId: 3 },
  { FullServiceId: 7, ComponentId: 4 },
  { FullServiceId: 7, ComponentId: 5 },

  // Almera (G15) ТО-8
  { FullServiceId: 8, ComponentId: 9 },
  { FullServiceId: 8, ComponentId: 10 },
  { FullServiceId: 8, ComponentId: 11 },
  { FullServiceId: 8, ComponentId: 12 },
  { FullServiceId: 8, ComponentId: 13 },
  { FullServiceId: 8, ComponentId: 14 },
  { FullServiceId: 8, ComponentId: 15 },
  { FullServiceId: 8, ComponentId: 16 },
  { FullServiceId: 8, ComponentId: 17 },
  { FullServiceId: 8, ComponentId: 1 },
  { FullServiceId: 8, ComponentId: 2 },
  { FullServiceId: 8, ComponentId: 3 },
  { FullServiceId: 8, ComponentId: 18 },
  { FullServiceId: 8, ComponentId: 7 },
  { FullServiceId: 8, ComponentId: 4 },
  { FullServiceId: 8, ComponentId: 8 },
  { FullServiceId: 8, ComponentId: 5 },
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
