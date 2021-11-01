const components = [
  { title: 'Корпус двигателя almera', price: 17500, counterType: '1шт' },
  { title: 'Корпус двигателя tiida', price: 20000, counterType: '1шт' },
  { title: 'Корпус двигателя juke', price: 22250, counterType: '1шт' },
  { title: 'Корпус двигателя qashqai', price: 35500, counterType: '1шт' },
  { title: 'Корпус двигателя pathfinder', price: 45000, counterType: '1шт' },
  { title: 'Антифриз Nissan Coolant L248 Premix', price: 420, counterType: '1л' },
  { title: 'Смазка направляющих суппортов Toyota', price: 250, counterType: '100гр' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < components.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Components', [{
        title: components[i].title,
        price: components[i].price,
        counterType: components[i].counterType,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Components', null, {});
  },
};
