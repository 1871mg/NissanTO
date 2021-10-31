const components = [
  {
    title: 'Моторное масло и фильтр', price: '500', counterType: 'л',
  }, {
    title: 'Воздушный фильтр двигателя', price: '500', counterType: 'шт',
  }, {
    title: 'Свечи зажигания (комплект)', price: '1000', counterType: 'шт',
  },
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
