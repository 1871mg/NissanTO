const serviceFullServices = [
  // Almera (G15) ТО-1
  { FullServiceId: 1, ServiceId: 1 },
  { FullServiceId: 1, ServiceId: 2 },
  { FullServiceId: 1, ServiceId: 3 },
  { FullServiceId: 1, ServiceId: 4 },
  { FullServiceId: 1, ServiceId: 5 },
  { FullServiceId: 1, ServiceId: 19 },

  // Almera (G15) ТО-2
  { FullServiceId: 2, ServiceId: 6 },
  { FullServiceId: 2, ServiceId: 1 },
  { FullServiceId: 2, ServiceId: 2 },
  { FullServiceId: 2, ServiceId: 3 },
  { FullServiceId: 2, ServiceId: 7 },
  { FullServiceId: 2, ServiceId: 4 },
  { FullServiceId: 2, ServiceId: 8 },
  { FullServiceId: 2, ServiceId: 5 },
  { FullServiceId: 2, ServiceId: 20 },

  // Almera (G15) ТО-3
  { FullServiceId: 3, ServiceId: 1 },
  { FullServiceId: 3, ServiceId: 2 },
  { FullServiceId: 3, ServiceId: 3 },
  { FullServiceId: 3, ServiceId: 4 },
  { FullServiceId: 3, ServiceId: 5 },
  { FullServiceId: 3, ServiceId: 19 },

  // Almera (G15) ТО-4
  { FullServiceId: 4, ServiceId: 9 },
  { FullServiceId: 4, ServiceId: 10 },
  { FullServiceId: 4, ServiceId: 6 },
  { FullServiceId: 4, ServiceId: 11 },
  { FullServiceId: 4, ServiceId: 12 },
  { FullServiceId: 4, ServiceId: 13 },
  { FullServiceId: 4, ServiceId: 14 },
  { FullServiceId: 4, ServiceId: 15 },
  { FullServiceId: 4, ServiceId: 16 },
  { FullServiceId: 4, ServiceId: 17 },
  { FullServiceId: 4, ServiceId: 1 },
  { FullServiceId: 4, ServiceId: 2 },
  { FullServiceId: 4, ServiceId: 3 },
  { FullServiceId: 4, ServiceId: 7 },
  { FullServiceId: 4, ServiceId: 4 },
  { FullServiceId: 4, ServiceId: 8 },
  { FullServiceId: 4, ServiceId: 5 },
  { FullServiceId: 4, ServiceId: 21 },

  // Almera (G15) ТО-5
  { FullServiceId: 5, ServiceId: 1 },
  { FullServiceId: 5, ServiceId: 2 },
  { FullServiceId: 5, ServiceId: 3 },
  { FullServiceId: 5, ServiceId: 4 },
  { FullServiceId: 5, ServiceId: 5 },
  { FullServiceId: 5, ServiceId: 19 },

  // Almera (G15) ТО-6
  { FullServiceId: 6, ServiceId: 6 },
  { FullServiceId: 6, ServiceId: 1 },
  { FullServiceId: 6, ServiceId: 2 },
  { FullServiceId: 6, ServiceId: 3 },
  { FullServiceId: 6, ServiceId: 7 },
  { FullServiceId: 6, ServiceId: 4 },
  { FullServiceId: 6, ServiceId: 8 },
  { FullServiceId: 6, ServiceId: 18 },
  { FullServiceId: 6, ServiceId: 5 },
  { FullServiceId: 6, ServiceId: 20 },

  // Almera (G15) ТО-7
  { FullServiceId: 7, ServiceId: 1 },
  { FullServiceId: 7, ServiceId: 2 },
  { FullServiceId: 7, ServiceId: 3 },
  { FullServiceId: 7, ServiceId: 4 },
  { FullServiceId: 7, ServiceId: 5 },
  { FullServiceId: 7, ServiceId: 19 },

  // Almera (G15) ТО-8
  { FullServiceId: 8, ServiceId: 9 },
  { FullServiceId: 8, ServiceId: 10 },
  { FullServiceId: 8, ServiceId: 6 },
  { FullServiceId: 8, ServiceId: 11 },
  { FullServiceId: 8, ServiceId: 12 },
  { FullServiceId: 8, ServiceId: 13 },
  { FullServiceId: 8, ServiceId: 14 },
  { FullServiceId: 8, ServiceId: 15 },
  { FullServiceId: 8, ServiceId: 16 },
  { FullServiceId: 8, ServiceId: 17 },
  { FullServiceId: 8, ServiceId: 1 },
  { FullServiceId: 8, ServiceId: 2 },
  { FullServiceId: 8, ServiceId: 3 },
  { FullServiceId: 8, ServiceId: 7 },
  { FullServiceId: 8, ServiceId: 4 },
  { FullServiceId: 8, ServiceId: 8 },
  { FullServiceId: 8, ServiceId: 5 },
  { FullServiceId: 8, ServiceId: 21 },

  // Tiida (C13) ТО-1
  { FullServiceId: 9, ServiceId: 22 },
  { FullServiceId: 9, ServiceId: 23 },
  { FullServiceId: 9, ServiceId: 24 },
  { FullServiceId: 9, ServiceId: 30 },
  { FullServiceId: 9, ServiceId: 31 },

  // Tiida (C13) ТО-2
  { FullServiceId: 10, ServiceId: 22 },
  { FullServiceId: 10, ServiceId: 23 },
  { FullServiceId: 10, ServiceId: 25 },
  { FullServiceId: 10, ServiceId: 26 },
  { FullServiceId: 10, ServiceId: 27 },
  { FullServiceId: 10, ServiceId: 24 },
  { FullServiceId: 10, ServiceId: 28 },
  { FullServiceId: 10, ServiceId: 30 },
  { FullServiceId: 10, ServiceId: 32 },

  // Tiida (C13) ТО-3
  { FullServiceId: 11, ServiceId: 22 },
  { FullServiceId: 11, ServiceId: 23 },
  { FullServiceId: 11, ServiceId: 24 },
  { FullServiceId: 11, ServiceId: 30 },
  { FullServiceId: 11, ServiceId: 31 },

  // Tiida (C13) ТО-4
  { FullServiceId: 12, ServiceId: 22 },
  { FullServiceId: 12, ServiceId: 23 },
  { FullServiceId: 12, ServiceId: 25 },
  { FullServiceId: 12, ServiceId: 26 },
  { FullServiceId: 12, ServiceId: 27 },
  { FullServiceId: 12, ServiceId: 24 },
  { FullServiceId: 12, ServiceId: 28 },
  { FullServiceId: 12, ServiceId: 30 },
  { FullServiceId: 12, ServiceId: 32 },

  // Tiida (C13) ТО-5
  { FullServiceId: 13, ServiceId: 22 },
  { FullServiceId: 13, ServiceId: 23 },
  { FullServiceId: 13, ServiceId: 24 },
  { FullServiceId: 13, ServiceId: 30 },
  { FullServiceId: 13, ServiceId: 31 },

  // Tiida (C13) ТО-6
  { FullServiceId: 14, ServiceId: 22 },
  { FullServiceId: 14, ServiceId: 23 },
  { FullServiceId: 14, ServiceId: 25 },
  { FullServiceId: 14, ServiceId: 26 },
  { FullServiceId: 14, ServiceId: 27 },
  { FullServiceId: 14, ServiceId: 24 },
  { FullServiceId: 14, ServiceId: 28 },
  { FullServiceId: 14, ServiceId: 29 },
  { FullServiceId: 14, ServiceId: 30 },
  { FullServiceId: 14, ServiceId: 33 },

  // Tiida (C13) ТО-7
  { FullServiceId: 15, ServiceId: 22 },
  { FullServiceId: 15, ServiceId: 23 },
  { FullServiceId: 15, ServiceId: 24 },
  { FullServiceId: 15, ServiceId: 30 },
  { FullServiceId: 15, ServiceId: 31 },

  // Tiida (C13) ТО-8
  { FullServiceId: 16, ServiceId: 22 },
  { FullServiceId: 16, ServiceId: 23 },
  { FullServiceId: 16, ServiceId: 25 },
  { FullServiceId: 16, ServiceId: 26 },
  { FullServiceId: 16, ServiceId: 27 },
  { FullServiceId: 16, ServiceId: 24 },
  { FullServiceId: 16, ServiceId: 28 },
  { FullServiceId: 16, ServiceId: 30 },
  { FullServiceId: 16, ServiceId: 32 },

  // Juke (F15) ТО-1
  { FullServiceId: 17, ServiceId: 34 },
  { FullServiceId: 17, ServiceId: 35 },
  { FullServiceId: 17, ServiceId: 36 },
  { FullServiceId: 17, ServiceId: 44 },
  { FullServiceId: 17, ServiceId: 45 },

  // Juke (F15) ТО-2
  { FullServiceId: 18, ServiceId: 34 },
  { FullServiceId: 18, ServiceId: 35 },
  { FullServiceId: 18, ServiceId: 37 },
  { FullServiceId: 18, ServiceId: 38 },
  { FullServiceId: 18, ServiceId: 39 },
  { FullServiceId: 18, ServiceId: 36 },
  { FullServiceId: 18, ServiceId: 40 },
  { FullServiceId: 18, ServiceId: 41 },
  { FullServiceId: 18, ServiceId: 42 },
  { FullServiceId: 18, ServiceId: 44 },
  { FullServiceId: 18, ServiceId: 46 },

  // Juke (F15) ТО-3
  { FullServiceId: 19, ServiceId: 34 },
  { FullServiceId: 19, ServiceId: 35 },
  { FullServiceId: 19, ServiceId: 36 },
  { FullServiceId: 19, ServiceId: 44 },
  { FullServiceId: 19, ServiceId: 45 },

  // Juke (F15) ТО-4
  { FullServiceId: 20, ServiceId: 34 },
  { FullServiceId: 20, ServiceId: 35 },
  { FullServiceId: 20, ServiceId: 37 },
  { FullServiceId: 20, ServiceId: 38 },
  { FullServiceId: 20, ServiceId: 39 },
  { FullServiceId: 20, ServiceId: 36 },
  { FullServiceId: 20, ServiceId: 40 },
  { FullServiceId: 20, ServiceId: 41 },
  { FullServiceId: 20, ServiceId: 42 },
  { FullServiceId: 20, ServiceId: 44 },
  { FullServiceId: 20, ServiceId: 46 },

  // Juke (F15) ТО-5
  { FullServiceId: 21, ServiceId: 34 },
  { FullServiceId: 21, ServiceId: 35 },
  { FullServiceId: 21, ServiceId: 36 },
  { FullServiceId: 21, ServiceId: 44 },
  { FullServiceId: 21, ServiceId: 45 },

  // Juke (F15) ТО-6
  { FullServiceId: 22, ServiceId: 34 },
  { FullServiceId: 22, ServiceId: 35 },
  { FullServiceId: 22, ServiceId: 37 },
  { FullServiceId: 22, ServiceId: 38 },
  { FullServiceId: 22, ServiceId: 39 },
  { FullServiceId: 22, ServiceId: 36 },
  { FullServiceId: 22, ServiceId: 40 },
  { FullServiceId: 22, ServiceId: 41 },
  { FullServiceId: 22, ServiceId: 42 },
  { FullServiceId: 22, ServiceId: 43 },
  { FullServiceId: 22, ServiceId: 44 },
  { FullServiceId: 22, ServiceId: 47 },

  // Juke (F15) ТО-7
  { FullServiceId: 23, ServiceId: 34 },
  { FullServiceId: 23, ServiceId: 35 },
  { FullServiceId: 23, ServiceId: 36 },
  { FullServiceId: 23, ServiceId: 44 },
  { FullServiceId: 23, ServiceId: 45 },

  // Juke (F15) ТО-8
  { FullServiceId: 24, ServiceId: 34 },
  { FullServiceId: 24, ServiceId: 35 },
  { FullServiceId: 24, ServiceId: 37 },
  { FullServiceId: 24, ServiceId: 38 },
  { FullServiceId: 24, ServiceId: 39 },
  { FullServiceId: 24, ServiceId: 36 },
  { FullServiceId: 24, ServiceId: 40 },
  { FullServiceId: 24, ServiceId: 41 },
  { FullServiceId: 24, ServiceId: 42 },
  { FullServiceId: 24, ServiceId: 44 },
  { FullServiceId: 24, ServiceId: 46 },

  // Qashqai (J11) ТО-1
  { FullServiceId: 25, ServiceId: 48 },
  { FullServiceId: 25, ServiceId: 49 },
  { FullServiceId: 25, ServiceId: 50 },
  { FullServiceId: 25, ServiceId: 51 },
  { FullServiceId: 25, ServiceId: 52 },
  { FullServiceId: 25, ServiceId: 53 },
  { FullServiceId: 25, ServiceId: 58 },
  { FullServiceId: 25, ServiceId: 59 },

  // Qashqai (J11) ТО-2
  { FullServiceId: 26, ServiceId: 48 },
  { FullServiceId: 26, ServiceId: 49 },
  { FullServiceId: 26, ServiceId: 50 },
  { FullServiceId: 26, ServiceId: 51 },
  { FullServiceId: 26, ServiceId: 54 },
  { FullServiceId: 26, ServiceId: 52 },
  { FullServiceId: 26, ServiceId: 55 },
  { FullServiceId: 26, ServiceId: 56 },
  { FullServiceId: 26, ServiceId: 53 },
  { FullServiceId: 26, ServiceId: 58 },
  { FullServiceId: 26, ServiceId: 60 },

  // Qashqai (J11) ТО-3
  { FullServiceId: 27, ServiceId: 48 },
  { FullServiceId: 27, ServiceId: 49 },
  { FullServiceId: 27, ServiceId: 50 },
  { FullServiceId: 27, ServiceId: 51 },
  { FullServiceId: 27, ServiceId: 52 },
  { FullServiceId: 27, ServiceId: 53 },
  { FullServiceId: 27, ServiceId: 58 },
  { FullServiceId: 27, ServiceId: 59 },

  // Qashqai (J11) ТО-4
  { FullServiceId: 28, ServiceId: 48 },
  { FullServiceId: 28, ServiceId: 49 },
  { FullServiceId: 28, ServiceId: 50 },
  { FullServiceId: 28, ServiceId: 51 },
  { FullServiceId: 28, ServiceId: 54 },
  { FullServiceId: 28, ServiceId: 52 },
  { FullServiceId: 28, ServiceId: 55 },
  { FullServiceId: 28, ServiceId: 56 },
  { FullServiceId: 28, ServiceId: 53 },
  { FullServiceId: 28, ServiceId: 58 },
  { FullServiceId: 28, ServiceId: 60 },

  // Qashqai (J11) ТО-5
  { FullServiceId: 29, ServiceId: 48 },
  { FullServiceId: 29, ServiceId: 49 },
  { FullServiceId: 29, ServiceId: 50 },
  { FullServiceId: 29, ServiceId: 51 },
  { FullServiceId: 29, ServiceId: 52 },
  { FullServiceId: 29, ServiceId: 53 },
  { FullServiceId: 29, ServiceId: 58 },
  { FullServiceId: 29, ServiceId: 59 },

  // Qashqai (J11) ТО-6
  { FullServiceId: 30, ServiceId: 48 },
  { FullServiceId: 30, ServiceId: 49 },
  { FullServiceId: 30, ServiceId: 50 },
  { FullServiceId: 30, ServiceId: 51 },
  { FullServiceId: 30, ServiceId: 54 },
  { FullServiceId: 30, ServiceId: 52 },
  { FullServiceId: 30, ServiceId: 55 },
  { FullServiceId: 30, ServiceId: 56 },
  { FullServiceId: 30, ServiceId: 53 },
  { FullServiceId: 30, ServiceId: 57 },
  { FullServiceId: 30, ServiceId: 58 },
  { FullServiceId: 30, ServiceId: 61 },

  // Qashqai (J11) ТО-7
  { FullServiceId: 31, ServiceId: 48 },
  { FullServiceId: 31, ServiceId: 49 },
  { FullServiceId: 31, ServiceId: 50 },
  { FullServiceId: 31, ServiceId: 51 },
  { FullServiceId: 31, ServiceId: 52 },
  { FullServiceId: 31, ServiceId: 53 },
  { FullServiceId: 31, ServiceId: 58 },
  { FullServiceId: 31, ServiceId: 59 },

  // Qashqai (J11) ТО-8
  { FullServiceId: 32, ServiceId: 48 },
  { FullServiceId: 32, ServiceId: 49 },
  { FullServiceId: 32, ServiceId: 50 },
  { FullServiceId: 32, ServiceId: 51 },
  { FullServiceId: 32, ServiceId: 54 },
  { FullServiceId: 32, ServiceId: 52 },
  { FullServiceId: 32, ServiceId: 55 },
  { FullServiceId: 32, ServiceId: 56 },
  { FullServiceId: 32, ServiceId: 53 },
  { FullServiceId: 32, ServiceId: 58 },
  { FullServiceId: 32, ServiceId: 60 },

  // Pathfinder (R52) ТО-1
  { FullServiceId: 33, ServiceId: 62 },
  { FullServiceId: 33, ServiceId: 63 },
  { FullServiceId: 33, ServiceId: 66 },
  { FullServiceId: 33, ServiceId: 67 },
  { FullServiceId: 33, ServiceId: 70 },
  { FullServiceId: 33, ServiceId: 71 },
  { FullServiceId: 33, ServiceId: 72 },

  // Pathfinder (R52) ТО-2
  { FullServiceId: 34, ServiceId: 62 },
  { FullServiceId: 34, ServiceId: 63 },
  { FullServiceId: 34, ServiceId: 64 },
  { FullServiceId: 34, ServiceId: 65 },
  { FullServiceId: 34, ServiceId: 66 },
  { FullServiceId: 34, ServiceId: 67 },
  { FullServiceId: 34, ServiceId: 68 },
  { FullServiceId: 34, ServiceId: 70 },
  { FullServiceId: 34, ServiceId: 71 },
  { FullServiceId: 34, ServiceId: 73 },

  // Pathfinder (R52) ТО-3
  { FullServiceId: 35, ServiceId: 62 },
  { FullServiceId: 35, ServiceId: 63 },
  { FullServiceId: 35, ServiceId: 66 },
  { FullServiceId: 35, ServiceId: 67 },
  { FullServiceId: 35, ServiceId: 70 },
  { FullServiceId: 35, ServiceId: 71 },
  { FullServiceId: 35, ServiceId: 72 },

  // Pathfinder (R52) ТО-4
  { FullServiceId: 36, ServiceId: 62 },
  { FullServiceId: 36, ServiceId: 63 },
  { FullServiceId: 36, ServiceId: 64 },
  { FullServiceId: 36, ServiceId: 65 },
  { FullServiceId: 36, ServiceId: 66 },
  { FullServiceId: 36, ServiceId: 67 },
  { FullServiceId: 36, ServiceId: 68 },
  { FullServiceId: 36, ServiceId: 70 },
  { FullServiceId: 36, ServiceId: 71 },
  { FullServiceId: 36, ServiceId: 73 },

  // Pathfinder (R52) ТО-5
  { FullServiceId: 37, ServiceId: 62 },
  { FullServiceId: 37, ServiceId: 63 },
  { FullServiceId: 37, ServiceId: 66 },
  { FullServiceId: 37, ServiceId: 67 },
  { FullServiceId: 37, ServiceId: 70 },
  { FullServiceId: 37, ServiceId: 71 },
  { FullServiceId: 37, ServiceId: 72 },

  // Pathfinder (R52) ТО-6
  { FullServiceId: 38, ServiceId: 62 },
  { FullServiceId: 38, ServiceId: 63 },
  { FullServiceId: 38, ServiceId: 64 },
  { FullServiceId: 38, ServiceId: 65 },
  { FullServiceId: 38, ServiceId: 66 },
  { FullServiceId: 38, ServiceId: 67 },
  { FullServiceId: 38, ServiceId: 68 },
  { FullServiceId: 38, ServiceId: 70 },
  { FullServiceId: 38, ServiceId: 69 },
  { FullServiceId: 38, ServiceId: 71 },
  { FullServiceId: 38, ServiceId: 74 },

  // Pathfinder (R52) ТО-7
  { FullServiceId: 39, ServiceId: 62 },
  { FullServiceId: 39, ServiceId: 63 },
  { FullServiceId: 39, ServiceId: 66 },
  { FullServiceId: 39, ServiceId: 67 },
  { FullServiceId: 39, ServiceId: 70 },
  { FullServiceId: 39, ServiceId: 71 },
  { FullServiceId: 39, ServiceId: 72 },

  // Pathfinder (R52) ТО-8
  { FullServiceId: 40, ServiceId: 62 },
  { FullServiceId: 40, ServiceId: 63 },
  { FullServiceId: 40, ServiceId: 64 },
  { FullServiceId: 40, ServiceId: 65 },
  { FullServiceId: 40, ServiceId: 66 },
  { FullServiceId: 40, ServiceId: 67 },
  { FullServiceId: 40, ServiceId: 68 },
  { FullServiceId: 40, ServiceId: 70 },
  { FullServiceId: 40, ServiceId: 71 },
  { FullServiceId: 40, ServiceId: 73 },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < serviceFullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServiceServices', [{
        FullServiceId: serviceFullServices[i].FullServiceId,
        ServiceId: serviceFullServices[i].ServiceId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceServices', null, {});
  },
};
