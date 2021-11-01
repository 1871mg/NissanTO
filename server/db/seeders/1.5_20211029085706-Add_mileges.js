const mileges = [
  { distanse: 15000, years: 1 },
  { distanse: 30000, years: 2 },
  { distanse: 45000, years: 3 },
  { distanse: 60000, years: 4 },
  { distanse: 75000, years: 5 },
  { distanse: 90000, years: 6 },
  { distanse: 105000, years: 7 },
  { distanse: 120000, years: 8 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < mileges.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Mileges', [{
        distanse: mileges[i].distanse,
        years: mileges[i].years,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mileges', null, {});
  },
};
