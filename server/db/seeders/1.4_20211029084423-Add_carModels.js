const models = [
	{ title: 'Nissan Almera (G15)', photoLink: 'https://i.ibb.co/dfMj70D/G15.png' },
	{ title: 'Nissan Almera Classic (B10)', photoLink: 'https://i.ibb.co/2kPy0MQ/B10.png' },
	{ title: 'Nissan Note (E11) 1.4', photoLink: 'https://i.ibb.co/HTNHHTR/E11.png' },
	{ title: 'Nissan Note (E11) 1.6', photoLink: 'https://i.ibb.co/HTNHHTR/E11.png' },
	{ title: 'Nissan Tiida (C11) 1.6', photoLink: 'https://i.ibb.co/y8HX1HW/C11.png' },
	{ title: 'Nissan Tiida (C11) 1.8', photoLink: 'https://i.ibb.co/y8HX1HW/C11.png' },
	{ title: 'Nissan Tiida (C13)', photoLink: 'https://i.ibb.co/XXhsDbG/C13.png' },
	{ title: 'Nissan Juke (F15) 1.6', photoLink: 'https://i.ibb.co/80nSgzb/F15.png' },
	{ title: 'Nissan Juke (F15) 1.6 турбо', photoLink: 'https://i.ibb.co/80nSgzb/F15.png' },
	{ title: 'Nissan Sentra (B17)', photoLink: 'https://i.ibb.co/QY0rgr0/B17.png' },
	{ title: 'Nissan Qashqai (J10) 1.6', photoLink: 'https://i.ibb.co/3zfrZcW/J10.png' },
	{ title: 'Nissan Qashqai (J10) 2.0', photoLink: 'https://i.ibb.co/3zfrZcW/J10.png' },
	{ title: 'Nissan Qashqai (J11) 1.2 турбо', photoLink: 'https://i.ibb.co/zJwk0K8/J11.png' },
	{ title: 'Nissan Qashqai (J11) 1.6 турбодизель', photoLink: 'https://i.ibb.co/zJwk0K8/J11.png' },
	{ title: 'Nissan Qashqai (J11) 2.0', photoLink: 'https://i.ibb.co/zJwk0K8/J11.png' },
	{ title: 'Nissan Teana (J32) 2.5 рядный', photoLink: 'https://i.ibb.co/6FxTP5r/J32.png' },
	{ title: 'Nissan Teana (J32) 2.5 VQ', photoLink: 'https://i.ibb.co/6FxTP5r/J32.png' },
	{ title: 'Nissan Teana (J32) 3.5', photoLink: 'https://i.ibb.co/6FxTP5r/J32.png' },
	{ title: 'Nissan Teana (L33) 2.5', photoLink: 'https://i.ibb.co/7zdvsFy/L33.png' },
	{ title: 'Nissan Teana (L33) 3.5', photoLink: 'https://i.ibb.co/7zdvsFy/L33.png' },
	{ title: 'Nissan Terrano (D10) 1.6', photoLink: 'https://i.ibb.co/X70V7ns/D10.png' },
	{ title: 'Nissan Terrano (D10) 2.0', photoLink: 'https://i.ibb.co/X70V7ns/D10.png' },
	{ title: 'Nissan Terrano (D10) 1.6 2016', photoLink: 'https://i.ibb.co/X70V7ns/D10.png' },
	{ title: 'Nissan Terrano (D10) 2.0 2016', photoLink: 'https://i.ibb.co/X70V7ns/D10.png' },
	{ title: 'Nissan X-Trail (T31) 2.0', photoLink: 'https://i.ibb.co/YRg00YW/T31.png' },
	{ title: 'Nissan X-Trail (T31) 2.0 турбодизель', photoLink: 'https://i.ibb.co/YRg00YW/T31.png' },
	{ title: 'Nissan X-Trail (T31) 2.5', photoLink: 'https://i.ibb.co/YRg00YW/T31.png' },
	{ title: 'Nissan X-Trail (T32) 1.6 турбодизель', photoLink: 'https://i.ibb.co/qRF9NHg/T32.png' },
	{ title: 'Nissan X-Trail (T32) 2.0', photoLink: 'https://i.ibb.co/qRF9NHg/T32.png' },
	{ title: 'Nissan X-Trail (T32) 2.5', photoLink: 'https://i.ibb.co/qRF9NHg/T32.png' },
	{ title: 'Nissan Murano (Z51)', photoLink: 'https://i.ibb.co/z65tYbc/Z51.png' },
	{ title: 'Nissan Murano (Z52) 2.5 гибрид', photoLink: 'https://i.ibb.co/7bhkhr7/Z52.png' },
	{ title: 'Nissan Murano (Z52) 3.5', photoLink: 'https://i.ibb.co/7bhkhr7/Z52.png' },
	{ title: 'Nissan Navara (D40) 2.5 турбодизель', photoLink: 'https://i.ibb.co/ZB1kXm3/D40.png' },
	{ title: 'Nissan Navara (D40) 2.5 турбодизель DPF', photoLink: 'https://i.ibb.co/ZB1kXm3/D40.png' },
	{ title: 'Nissan Navara (D40) 3.0 турбодизель', photoLink: 'https://i.ibb.co/ZB1kXm3/D40.png' },
	{ title: 'Nissan Pickup (D22) 2.5 турбодизель', photoLink: 'https://i.ibb.co/XyxXLyM/D22.png' },
	{ title: 'Nissan Pickup (D22) 2.5 турбодизель 4WD', photoLink: 'https://i.ibb.co/XyxXLyM/D22.png' },
	{ title: 'Nissan Pathfinder (R51) 2.5 турбодизель', photoLink: 'https://i.ibb.co/8BSv2bX/R51.png' },
	{ title: 'Nissan Pathfinder (R51) 2.5 турбодизель DPF', photoLink: 'https://i.ibb.co/8BSv2bX/R51.png' },
	{ title: 'Nissan Pathfinder (R51) 3.0 турбодизель', photoLink: 'https://i.ibb.co/8BSv2bX/R51.png' },
	{ title: 'Nissan Pathfinder (R51) 4.0', photoLink: 'https://i.ibb.co/8BSv2bX/R51.png' },
	{ title: 'Nissan Pathfinder (R52) 2.5 гибрид', photoLink: 'https://i.ibb.co/YD6q6WC/R52.png' },
	{ title: 'Nissan Pathfinder (R52) 3.5', photoLink: 'https://i.ibb.co/YD6q6WC/R52.png' },
	{ title: 'Nissan Patrol (Y62)', photoLink: 'https://i.ibb.co/2vGP5kP/Y62.png' },
	{ title: 'Nissan Cabstar (F24)', photoLink: ' https://i.ibb.co/mq8tLfd/F24.png' },
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
