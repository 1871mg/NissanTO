const fullServices = [

  // Almera (G15)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 2,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 2,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 2,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 2,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 2,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 2,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 2,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 2,
  },

  // Tiida (C13)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 7,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 7,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 7,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 7,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 7,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 7,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 7,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 7,
  },

  // Juke (F15)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 8,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 8,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 8,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 8,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 8,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 8,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 8,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 8,
  },

  // Qashqai (J11)
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 13,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 13,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 13,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 13,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 13,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 13,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 13,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 13,
  },

  // Pathfinder (R52)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 43,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 43,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 43,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 43,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 43,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 43,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 43,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 43,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < fullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServices', [{
        title: fullServices[i].title,
        duration: fullServices[i].duration,
        MilegeId: fullServices[i].MilegeId,
        CarModelId: fullServices[i].CarModelId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServices', null, {});
  },
};
