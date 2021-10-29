const fullServices = [
  {
    title: 'ТО-1', duration: '1', MilageId: '1', ModellId: '',
  }, {
    title: 'ТО-2', duration: '2', MilageId: '2', ModellId: '',
  }, {
    title: 'ТО-3', duration: '1', MilageId: '3', ModellId: '',
  }, {
    title: 'ТО-4', duration: '2', MilageId: '4', ModellId: '',
  }, {
    title: 'ТО-5', duration: '1', MilageId: '5', ModellId: '',
  }, {
    title: 'ТО-6', duration: '4', MilageId: '6', ModellId: '',
  }, {
    title: 'ТО-7', duration: '1', MilageId: '7', ModellId: '',
  }, {
    title: 'ТО-8', duration: '2', MilageId: '8', ModellId: '',
  }, {
    title: 'ТО-9', duration: '1', MilageId: '9', ModellId: '',
  }, {
    title: 'ТО-10', duration: '4', MilageId: '10', ModellId: '',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < fullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServices', [{
        title: fullServices[i].title,
        duration: fullServices[i].duration,
        MilageId: fullServices[i].MilageId,
        ModellId: fullServices[i].ModellId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServices', null, {});
  },
};
