const components = [

  // Almera (G15) (Наименование всех запчастей для всех ТО)
  { title: 'Уплотнительное кольцо', price: 79, counterType: '1шт' },
  { title: 'Масляный фильтр', price: 450, counterType: '1шт' },
  { title: 'Фильтр воздушный', price: 1050, counterType: '1шт' },
  { title: 'Масло моторное', price: 2500, counterType: '4.8л' },
  { title: 'Набор автохимии для технического обслуживания', price: 1250, counterType: '1шт' },

  { title: 'Болт катушки зажигания', price: 650, counterType: '4шт' },
  { title: 'Свечи зажигания', price: 1350, counterType: '4шт' },
  { title: 'Жидкость тормозная', price: 950, counterType: '1шт' },

  { title: 'Болт натяжителя ремня грм', price: 90, counterType: '1шт' },
  { title: 'Болт катушки зажигания', price: 650, counterType: '4шт' },
  { title: 'Заглушка впускного распредвала', price: 300, counterType: '4шт' },
  { title: 'Заглушка выпускного распредвала', price: 250, counterType: '1шт' },
  { title: 'Ремень привода генератора', price: 2650, counterType: '1шт' },
  { title: 'Обводной ролик приводного ремня', price: 1900, counterType: '1шт' },
  { title: 'Натяжитель приводного ремня', price: 3800, counterType: '1шт' },
  { title: 'Шкив коленчатого вала', price: 5500, counterType: '1шт' },
  { title: 'Болт ролика натяжителя', price: 200, counterType: '1шт' },
  { title: 'Ремень привода грм', price: 7200, counterType: '1шт' },

  { title: 'Охлаждающая жидкость type d (концентрат)', price: 2400, counterType: '2.8л' },

  //
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
