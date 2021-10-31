const owners = [
  {
    firstname: 'ИванOwner', parentname: 'Иванович', lastname: 'Иванов', email: 'ivan@mail.ru', phone: '89111111111', password: '123456789',
  },
  {
    firstname: 'ДмитрийOwner', parentname: 'Анатольевич', lastname: 'Сусанин', email: 'dmitry@mail.ru', phone: '89222222222', password: '123456789',
  },
  {
    firstname: 'АлимбекOwner', parentname: '', lastname: 'Джамшудитов', email: 'alimbek@mail.ru', phone: '89333333333', password: '123456789',
  },
  {
    firstname: 'СергейOwner', parentname: 'Артёмович', lastname: 'Берёзко', email: 'sergey@mail.ru', phone: '89444444444', password: '123456789',
  },
  {
    firstname: 'ГордонOwner', parentname: 'Рамзи', lastname: 'Джонович', email: 'gordon@mail.ru', phone: '89555555555', password: '123456789',
  },
  {
    firstname: 'АлександрOwner', parentname: 'Алексеевич', lastname: 'Семёхин', email: 'alexsandr@mail.ru', phone: '89666666666', password: '123456789',
  },
  {
    firstname: 'ВасилийOwner', parentname: 'Игоревич', lastname: 'Пупкин', email: 'vasilyi@mail.ru', phone: '89777777777', password: '123456789',
  },
  {
    firstname: 'АлексейOwner', parentname: ' Дмитреевич', lastname: 'Ромашкин', email: 'alexsey@mail.ru', phone: '89888888888', password: '123456789',
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < owners.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Owners', [{
        firstname: owners[i].firstname,
        parentname: owners[i].parentname,
        lastname: owners[i].lastname,
        email: owners[i].email,
        phone: owners[i].phone,
        password: owners[i].password,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Owners', null, {});
  },
};
