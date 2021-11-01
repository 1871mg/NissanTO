const admins = [
  {
    firstname: 'ИванAdmin', parentname: 'Иванович', lastname: 'Иванов', email: 'ivan@mail.ru', phone: '89111111111', password: '123456789', employeeNumber: '123456789_1',
  },
  {
    firstname: 'ДмитрийAdmin', parentname: 'Анатольевич', lastname: 'Сусанин', email: 'dmitry@mail.ru', phone: '89222222222', password: '123456789', employeeNumber: '123456789_2',
  },
  {
    firstname: 'АлимбекAdmin', parentname: '', lastname: 'Джамшудитов', email: 'alimbek@mail.ru', phone: '89333333333', password: '123456789', employeeNumber: '123456789_3',
  },
  {
    firstname: 'СергейAdmin', parentname: 'Артёмович', lastname: 'Берёзко', email: 'sergey@mail.ru', phone: '89444444444', password: '123456789', employeeNumber: '123456789_4',
  },
  {
    firstname: 'ГордонAdmin', parentname: 'Рамзи', lastname: 'Джонович', email: 'gordon@mail.ru', phone: '89555555555', password: '123456789', employeeNumber: '123456789_5',
  },
  {
    firstname: 'АлександрAdmin', parentname: 'Алексеевич', lastname: 'Семёхин', email: 'alexsandr@mail.ru', phone: '89666666666', password: '123456789', employeeNumber: '123456789_6',
  },
  {
    firstname: 'ВасилийAdmin', parentname: 'Игоревич', lastname: 'Пупкин', email: 'vasilyi@mail.ru', phone: '89777777777', password: '123456789', employeeNumber: '123456789_7',
  },
  {
    firstname: 'АлексейAdmin', parentname: ' Дмитреевич', lastname: 'Ромашкин', email: 'alexsey@mail.ru', phone: '89888888888', password: '123456789', employeeNumber: '123456789_8',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < admins.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Admins', [{
        firstname: admins[i].firstname,
        parentname: admins[i].parentname,
        lastname: admins[i].lastname,
        email: admins[i].email,
        phone: admins[i].phone,
        password: admins[i].password,
        employeeNumber: admins[i].employeeNumber,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
