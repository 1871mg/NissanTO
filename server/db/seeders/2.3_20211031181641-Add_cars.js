const cars = [
  {
    OwnerId: 1, CarModelId: 1, stateNumber: 'а111аа11', yearIssue: 2020, MilegeId: 1,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < cars.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Cars', [{
        OwnerId: cars[i].OwnerId,
        CarModelId: cars[i].CarModelId,
        stateNumber: cars[i].stateNumber,
        yearIssue: cars[i].yearIssue,
        MilegeId: cars[i].MilegeId,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
