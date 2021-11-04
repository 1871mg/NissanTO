const components = [
  { title: 'Масло моторное', price: 2438, counterType: '4,63 л' }, // 13
  { title: 'Масло моторное', price: 4727, counterType: '6,9 л' }, // 34, 39, 40
  { title: 'Масло моторное', price: 3055, counterType: '5,8 л' }, // 32, 43
  { title: 'Масло моторное', price: 2528, counterType: '4,8 л' }, // 1, 21, 44
  { title: 'Масло моторное', price: 2001, counterType: '3,8 л' }, // 15, 29
  { title: 'Масло моторное', price: 1422, counterType: '2,7 л' }, // 2
  { title: 'Масло моторное', price: 2423, counterType: '4,6 л' }, // 16, 17, 18, 19, 20, 30, 31, 33
  { title: 'Масло моторное', price: 6508, counterType: '9,5 л' }, // 46
  { title: 'Масло моторное', price: 3768, counterType: '5,5 л' }, // 14, 28
  { title: 'Масло моторное', price: 2370, counterType: '4,5 л' }, // 9
  { title: 'Масло моторное', price: 5069, counterType: '7,4 л' }, // 26
  { title: 'Масло моторное', price: 2844, counterType: '5,4 л' }, // 22, 24
  { title: 'Масло моторное', price: 2317, counterType: '4,4 л' }, // 6, 12, 25
  { title: 'Масло моторное', price: 1534, counterType: '3,4 л' }, // 3
  { title: 'Масло моторное', price: 2791, counterType: '5,3 л' }, // 27
  { title: 'Масло моторное', price: 2264, counterType: '4,3 л' }, // 4, 5, 7, 8, 10, 11, 37, 38
  { title: 'Масло моторное', price: 2212, counterType: '4,2 л' }, // 23
  { title: 'Масло моторное', price: 4864, counterType: '7,1 л' }, // 35, 36, 41, 42
  { title: 'Центральная гайка ступицы заднего колеса', price: 576, counterType: '2 шт.' }, // 3, 4
  { title: 'Смазка ступиц свободного хода', price: 3475, counterType: '2 шт.' }, // 37, 38
  { title: 'Фильтр воздушный', price: 1039, counterType: '1 шт.' }, // 1, 21, 22
  { title: 'Маслянный фильтр', price: 1118, counterType: '1 шт.' }, // 35, 36, 41, 42
  { title: 'Фильтр салона', price: 1218, counterType: '1 шт.' }, // 43, 44
  { title: 'Набор автохимии для технического обслуживания', price: 1256, counterType: '1 шт.' }, // 1-46
  { title: 'Уплотнительное кольцо', price: 75, counterType: '1 шт.' }, // 2, 4-38, 41-45
  { title: 'Жидкость тормозная', price: 929, counterType: '1 шт.' }, // 37, 38
  { title: 'Маслянный фильтр', price: 450, counterType: '1 шт.' }, // 1, 4, 5, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 29, 31
  { title: 'Маслянный фильтр', price: 408, counterType: '1 шт.' }, // 3
  { title: 'Маслянный фильтр', price: 480, counterType: '1 шт.' }, // 32, 43
  { title: 'Маслянный фильтр', price: 580, counterType: '1 шт.' }, // 34, 37, 38, 39, 40
  { title: 'Маслянный фильтр', price: 893, counterType: '1 шт.' }, // 7, 10, 30, 33, 44
  { title: 'Маслянный фильтр', price: 990, counterType: '1 шт.' }, // 14, 28
  { title: 'Маслянный фильтр', price: 987, counterType: '1 шт.' }, // 13
  { title: 'Маслянный фильтр', price: 865, counterType: '1 шт.' }, // 26
  { title: 'Маслянный фильтр', price: 752, counterType: '1 шт.' }, // 2, 45
  { title: 'Маслянный фильтр', price: 691, counterType: '1 шт.' }, // 46
  { title: 'Маслянный фильтр', price: 649, counterType: '1 шт.' }, // 23
  { title: 'Топливный фильтр', price: 3172, counterType: '1 шт.' }, // 37, 38
  { title: 'Топливный фильтр', price: 4753, counterType: '1 шт.' }, // 46
  { title: 'Уплотнение пробки корпуса раздаточной коробки', price: 302, counterType: '1 шт.' }, // 12, 25, 26, 27, 28
  { title: 'Уплотнение пробки корпуса раздаточной коробки', price: 442, counterType: '1 шт.' }, // 15, 29, 30, 32, 33, 34, 39, 40, 43, 44
  { title: 'Уплотнение пробки корпуса редуктора', price: 343, counterType: '1 шт.' }, // 12, 15, 16, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 39, 40, 41, 42, 45
  { title: 'Уплотнительное кольцо', price: 122, counterType: '1 шт.' }, // 39, 40
  { title: 'Уплотнительное кольцо', price: 123, counterType: '1 шт.' }, // 32, 43
  { title: 'Уплотнительное кольцо', price: 155, counterType: '1 шт.' }, // 3
  { title: 'Уплотнительное кольцо', price: 78, counterType: '1 шт.' }, // 1
  { title: 'Уплотнительное кольцо', price: 80, counterType: '1 шт.' }, // 46
  { title: 'Фильтр воздушный', price: 1273, counterType: '1 шт.' }, // 23
  { title: 'Фильтр воздушный', price: 1729, counterType: '1 шт.' }, // 24
  { title: 'Фильтр салона', price: 1710, counterType: '1 шт.' }, // 10
  { title: 'Фильтр салона', price: 2053, counterType: '1 шт.' }, // 13, 14, 15, 28, 29, 30
  { title: 'Фильтр салона', price: 4030, counterType: '1 шт.' }, // 32, 33
  { title: 'Фильтр салона', price: 730, counterType: '1 шт.' }, // 8
  { title: 'Фильтр салона', price: 748, counterType: '1 шт.' }, // 21, 22, 23, 24
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
