const models = ['Versa (2008-2010)', 'Murano (2012-2016)', 'Qashqai (2019-2021)', 'Leaf (2013-2017)', 'Almera (2008-2012)', 'GT-R (2016-2020)'];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < models.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Models', [{
        title: models[i],

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Models', null, {});
  },
};
