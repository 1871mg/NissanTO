const services = [
  {
    title: 'Моторное масло и фильтр', price: '500',
  }, {
    title: 'Воздушный фильтр двигателя', price: '500',
  }, {
    title: 'Свечи зажигания (комплект)', price: '1000',
  }, {
    title: 'Фильтр саллонный', price: '250',
  }, {
    title: 'Масло в дифференциале', price: '750',
  }, {
    title: 'Жидкость в тормозной системе', price: '2000',
  }, {
    title: 'Жидкость в варианторе', price: '1500',
  }, {
    title: 'Антифриз', price: '300',
  }, {
    title: 'Масло в раздаточной коробке', price: '600',
  }, {
    title: 'Масло в механической коробке', price: '625',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < services.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Services', [{
        title: services[i].title,
        price: services[i].price,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
