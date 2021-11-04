const cars = [
  {
    OwnerId: 1, CarModelId: 1, stateNumber: 'а111аа11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 2, CarModelId: 5, stateNumber: 'б111бб11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 3, CarModelId: 10, stateNumber: 'в111вв11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 4, CarModelId: 15, stateNumber: 'г111гг11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 5, CarModelId: 20, stateNumber: 'д111дд11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 6, CarModelId: 25, stateNumber: 'е111ее11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 7, CarModelId: 30, stateNumber: 'Ж111ЖЖ11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 8, CarModelId: 35, stateNumber: 'з111зз11', yearIssue: 2020, MilegeId: 1,
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
