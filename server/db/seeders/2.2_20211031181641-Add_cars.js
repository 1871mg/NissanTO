const cars = [
  {
    OwnerId: 1, ModelId: 2, stateNumber: 'а111аа11', yearIssue: 2020, MilegeId: 1,
  }, {
    OwnerId: 2, ModelId: 7, stateNumber: 'б222бб22', yearIssue: 2020, MilegeId: 2,
  }, {
    OwnerId: 3, ModelId: 8, stateNumber: 'в333вв33', yearIssue: 2019, MilegeId: 3,
  }, {
    OwnerId: 4, ModelId: 13, stateNumber: 'г444гг44', yearIssue: 2019, MilegeId: 4,
  }, {
    OwnerId: 5, ModelId: 43, stateNumber: 'д555дд55', yearIssue: 2018, MilegeId: 5,
  }, {
    OwnerId: 6, ModelId: 7, stateNumber: 'е666ее66', yearIssue: 2018, MilegeId: 6,
  }, {
    OwnerId: 7, ModelId: 7, stateNumber: 'ё777ёё77', yearIssue: 2017, MilegeId: 7,
  }, {
    OwnerId: 8, ModelId: 8, stateNumber: 'ж888жж88', yearIssue: 2017, MilegeId: 8,
  }, {
    OwnerId: 3, ModelId: 13, stateNumber: 'з999зз99', yearIssue: 2016, MilegeId: 3,
  }, {
    OwnerId: 5, ModelId: 43, stateNumber: 'и111ии11', yearIssue: 2016, MilegeId: 5,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < cars.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Cars', [{
        OwnerId: cars[i].OwnerId,
        ModelId: cars[i].ModelId,
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
