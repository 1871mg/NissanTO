const models = [
  { title: 'Nissan Almera (B10)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/B10.png' },
  { title: 'Nissan Almera (G15)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/G15.png' }, // Функционирует
  { title: 'Nissan Note (E11) 1.4', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/E11.png' },
  { title: 'Nissan Note (E11) 1.6', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/E11.png' },
  { title: 'Nissan Tiida (C11) 1.6', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/C11.png' },
  { title: 'Nissan Tiida (C11) 1.8', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/C11.png' },
  { title: 'Nissan Tiida (C13)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/C13.png' }, // Функционирует
  { title: 'Nissan Juke (F15) 1.6', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/F15.png' }, // Функционирует
  { title: 'Nissan Juke (F15) 1.6 турбо', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/F15.png' },
  { title: 'Nissan Sentra (B17)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/B17.png' },
  { title: 'Nissan Qashqai (J10) 1.6', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J10.png' },
  { title: 'Nissan Qashqai (J10) 1.8', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J10.png' },
  { title: 'Nissan Qashqai (J11) 1.2 турбо', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J11.png' }, // Функционирует
  { title: 'Nissan Qashqai (J11) 1.6 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J11.png' },
  { title: 'Nissan Qashqai (J11) 2.0', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J11.png' },
  { title: 'Nissan Teana (J32) 2.5 рядный', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J32.png' },
  { title: 'Nissan Teana (J32) 2.5 VQ', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J32.png' },
  { title: 'Nissan Teana (J32) 3.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J32.png' },
  { title: 'Nissan Teana (L33) 2.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/L33.png' },
  { title: 'Nissan Teana (L33) 3.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/L33.png' },
  { title: 'Nissan Terrano (D10) 1.6', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D10.png' },
  { title: 'Nissan Terrano (D10) 2.0', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D10.png' },
  { title: 'Nissan Terrano (D10) 1.6 2016', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D10.png' },
  { title: 'Nissan Terrano (D10) 2.0 2016', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D10.png' },
  { title: 'Nissan X-Trail (T31) 2.0', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T31.png' },
  { title: 'Nissan X-Trail (T31) 2.0 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T31.png' },
  { title: 'Nissan X-Trail (T31) 2.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T31.png' },
  { title: 'Nissan X-Trail (T32) 1.6 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T32.png' },
  { title: 'Nissan X-Trail (T32) 2.0', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T32.png' },
  { title: 'Nissan X-Trail (T32) 2.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/T32.png' },
  { title: 'Nissan Murano (Z51)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/Z51.png' },
  { title: 'Nissan Murano (Z52) 2.5 гибрид', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/Z52.png' },
  { title: 'Nissan Murano (Z52) 3.5', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/Z52.png' },
  { title: 'Nissan Navara (D40) 2.5 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D40.png' },
  { title: 'Nissan Navara (D40) 2.5 турбодизель DPF', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D40.png' },
  { title: 'Nissan Navara (D40) 3.5 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D40.png' },
  { title: 'Nissan Pickup (D22) 2.5 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D22.png' },
  { title: 'Nissan Pickup (D22) 2.5 турбодизель 4WD', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/D22.png' },
  { title: 'Nissan Pathfinder (R51) 2.5 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/R51.png' },
  { title: 'Nissan Pathfinder (R51) 2.5 турбодизель DPF', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/R51.png' },
  { title: 'Nissan Pathfinder (R51) 3.0 турбодизель', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/R51.png' },
  { title: 'Nissan Pathfinder (R51) 4.0', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/R51.png' },
  { title: 'Nissan Pathfinder (R52)', photoLink: 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/R52.png' }, // Функционирует
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < models.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('CarModels', [{
        title: models[i].title,
        photoLink: models[i].photoLink,

        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CarModels', null, {});
  },
};
