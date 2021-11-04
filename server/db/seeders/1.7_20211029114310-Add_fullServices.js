const fullServices = [
  // Almera (G15)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 1,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 1,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 1,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 1,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 1,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 1,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 1,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 1,
  },

  // Nissan Almera Classic (B10)
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 2,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 2,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 2,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 2,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 2,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 2,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 2,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 2,
  },

  // Nissan Note (E11) 1,4
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 3,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 3,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 3,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 3,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 3,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 3,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 3,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 3,
  },

  // Nissan Note (E11) 1,6
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 4,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 4,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 4,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 4,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 4,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 4,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 4,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 4,
  },

  // Nissan Tiida (C11) 1,6
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 5,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 5,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 5,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 5,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 5,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 5,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 5,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 5,
  },

  // Nissan Tiida (C11) 1,8
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 6,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 6,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 6,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 6,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 6,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 6,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 6,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 6,
  },

  // Nissan Tiida (C13)
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 7,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 7,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 7,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 7,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 7,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 7,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 7,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 7,
  },

  // Nissan Juke (F15) 1,6
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 8,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 8,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 8,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 8,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 8,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 8,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 8,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 8,
  },

  // Nissan Juke (F15) 1,6 турбо
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 9,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 9,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 9,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 9,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 9,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 9,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 9,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 9,
  },

  // Nissan Sentra (B17)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 10,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 10,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 10,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 10,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 10,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 10,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 10,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 10,
  },

  // Nissan Qashqai (J10) 1,6
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 11,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 11,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 11,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 11,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 11,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 11,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 11,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 11,
  },

  // Nissan Qashqai (J10) 1,8
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 12,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 12,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 12,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 12,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 12,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 12,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 12,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 12,
  },

  // Nissan Qashqai (J11) 1,2 турбо
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 13,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 13,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 13,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 13,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 13,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 13,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 13,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 13,
  },

  // Nissan Qashqai (J11) 1,6 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 14,
  }, {
    title: 'ТО-1', duration: '2', MilegeId: 2, CarModelId: 14,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 3, CarModelId: 14,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 4, CarModelId: 14,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 5, CarModelId: 14,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 6, CarModelId: 14,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 7, CarModelId: 14,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 8, CarModelId: 14,
  },

  // Nissan Qashqai (J11) 2,0
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 15,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 15,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 15,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 15,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 15,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 15,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 15,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 15,
  },

  // Nissan Teana (J32) 2,5 рядный
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 16,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 16,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 16,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 16,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 16,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 16,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 16,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 16,
  },

  // Nissan Teana (J32) 2,5 VQ
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 17,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 17,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 17,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 17,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 17,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 17,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 17,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 17,
  },

  // Nissan Teana (J32) 3,5
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 18,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 18,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 18,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 18,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 18,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 18,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 18,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 18,
  },

  // Nissan Teana (L33) 2,5
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 19,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 19,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 19,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 19,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 19,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 19,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 19,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 19,
  },

  // Nissan Teana (L33) 3,5
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 20,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 20,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 20,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 20,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 20,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 20,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 20,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 20,
  },

  // Nissan Terrano (D10) 1,6
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 21,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 21,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 21,
  }, {
    title: 'ТО-4', duration: '4', MilegeId: 4, CarModelId: 21,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 21,
  }, {
    title: 'ТО-6', duration: '5', MilegeId: 6, CarModelId: 21,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 21,
  }, {
    title: 'ТО-8', duration: '5', MilegeId: 8, CarModelId: 21,
  },

  // Nissan Terrano (D10) 2,0
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 22,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 22,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 22,
  }, {
    title: 'ТО-4', duration: '4', MilegeId: 4, CarModelId: 22,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 22,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 22,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 22,
  }, {
    title: 'ТО-8', duration: '4', MilegeId: 8, CarModelId: 22,
  },

  // Nissan Terrano (D10) 1,6 2016
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 23,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 23,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 23,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 23,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 23,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 23,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 23,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 23,
  },

  // Nissan Terrano (D10) 2,0 2016
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 24,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 24,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 24,
  }, {
    title: 'ТО-4', duration: '4', MilegeId: 4, CarModelId: 24,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 24,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 24,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 24,
  }, {
    title: 'ТО-8', duration: '4', MilegeId: 8, CarModelId: 24,
  },

  // Nissan X-Trail (T31) 2,0
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 25,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 25,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 25,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 25,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 25,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 25,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 25,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 25,
  },

  // Nissan X-Trail (T31) 2,0 турбодизель
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 26,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 26,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 26,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 26,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 26,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 26,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 26,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 26,
  },

  // Nissan X-Trail (T31) 2,5
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 27,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 27,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 27,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 27,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 27,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 27,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 27,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 27,
  },

  // Nissan X-Trail (T32) 1,6 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 28,
  }, {
    title: 'ТО-1', duration: '2', MilegeId: 2, CarModelId: 28,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 3, CarModelId: 28,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 4, CarModelId: 28,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 5, CarModelId: 28,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 6, CarModelId: 28,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 7, CarModelId: 28,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 8, CarModelId: 28,
  },

  // Nissan X-Trail (T32) 2,0
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 29,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 29,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 29,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 29,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 29,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 29,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 29,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 29,
  },

  // Nissan X-Trail (T32) 2,5
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 30,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 30,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 30,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 30,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 30,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 30,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 30,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 30,
  },

  // Nissan Murano (Z51)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 31,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 31,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 31,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 31,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 31,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 31,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 31,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 31,
  },

  // Nissan Murano (Z52) 2,5 гибрид
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 32,
  }, {
    title: 'ТО-2', duration: '1', MilegeId: 2, CarModelId: 32,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 32,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 32,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 32,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 32,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 32,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 32,
  },

  // Nissan Murano (Z52) 3,5
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 33,
  }, {
    title: 'ТО-2', duration: '2', MilegeId: 2, CarModelId: 33,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 33,
  }, {
    title: 'ТО-4', duration: '2', MilegeId: 4, CarModelId: 33,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 33,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 33,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 33,
  }, {
    title: 'ТО-8', duration: '2', MilegeId: 8, CarModelId: 33,
  },

  // Nissan Navara (D40) 2,5 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 34,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 34,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 34,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 34,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 34,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 34,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 34,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 34,
  },

  // Nissan Navara (D40) 2,5 турбодизель DPF
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 35,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 35,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 35,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 35,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 35,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 35,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 35,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 35,
  },

  // Nissan Navara (D40) 3,0 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 36,
  }, {
    title: 'ТО-1', duration: '2', MilegeId: 2, CarModelId: 36,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 3, CarModelId: 36,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 4, CarModelId: 36,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 5, CarModelId: 36,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 6, CarModelId: 36,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 7, CarModelId: 36,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 8, CarModelId: 36,
  },

  // Nissan Pickup (D22) 2,5 турбодизель
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 37,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 37,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 37,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 37,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 37,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 37,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 37,
  }, {
    title: 'ТО-8', duration: '4', MilegeId: 8, CarModelId: 37,
  },

  // Nissan Pickup (D22) 2,5 турбодизель 4WD
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 38,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 38,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 38,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 38,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 38,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 38,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 38,
  }, {
    title: 'ТО-8', duration: '4', MilegeId: 8, CarModelId: 38,
  },

  // Nissan Pathfinder (R51) 2,5 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 39,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 39,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 39,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 39,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 39,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 39,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 39,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 39,
  },

  // Nissan Pathfinder (R51) 2,5 турбодизель DPF
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 40,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 40,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 40,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 40,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 40,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 40,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 40,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 40,
  },

  // Nissan Pathfinder (R51) 3,0 турбодизель
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 41,
  }, {
    title: 'ТО-1', duration: '2', MilegeId: 2, CarModelId: 41,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 3, CarModelId: 41,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 4, CarModelId: 41,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 5, CarModelId: 41,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 6, CarModelId: 41,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 7, CarModelId: 41,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 8, CarModelId: 41,
  },

  // Nissan Pathfinder (R51) 4,0
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 42,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 42,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 42,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 42,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 42,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 42,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 42,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 42,
  },

  // Nissan Pathfinder (R52) 2,5 гибрид
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 43,
  }, {
    title: 'ТО-2', duration: '1', MilegeId: 2, CarModelId: 43,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 43,
  }, {
    title: 'ТО-4', duration: '1', MilegeId: 4, CarModelId: 43,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 43,
  }, {
    title: 'ТО-6', duration: '2', MilegeId: 6, CarModelId: 43,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 43,
  }, {
    title: 'ТО-8', duration: '1', MilegeId: 8, CarModelId: 43,
  },

  // Nissan Pathfinder (R52) 3,5
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 44,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 44,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 44,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 44,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 44,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 44,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 44,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 44,
  },

  // Nissan Patrol (Y62)
  {
    title: 'ТО-1', duration: '2', MilegeId: 1, CarModelId: 45,
  }, {
    title: 'ТО-2', duration: '3', MilegeId: 2, CarModelId: 45,
  }, {
    title: 'ТО-3', duration: '2', MilegeId: 3, CarModelId: 45,
  }, {
    title: 'ТО-4', duration: '3', MilegeId: 4, CarModelId: 45,
  }, {
    title: 'ТО-5', duration: '2', MilegeId: 5, CarModelId: 45,
  }, {
    title: 'ТО-6', duration: '3', MilegeId: 6, CarModelId: 45,
  }, {
    title: 'ТО-7', duration: '2', MilegeId: 7, CarModelId: 45,
  }, {
    title: 'ТО-8', duration: '3', MilegeId: 8, CarModelId: 45,
  },

  // Nissan Cabstar (F24)
  {
    title: 'ТО-1', duration: '1', MilegeId: 1, CarModelId: 46,
  }, {
    title: 'ТО-2', duration: '4', MilegeId: 2, CarModelId: 46,
  }, {
    title: 'ТО-3', duration: '1', MilegeId: 3, CarModelId: 46,
  }, {
    title: 'ТО-4', duration: '4', MilegeId: 4, CarModelId: 46,
  }, {
    title: 'ТО-5', duration: '1', MilegeId: 5, CarModelId: 46,
  }, {
    title: 'ТО-6', duration: '4', MilegeId: 6, CarModelId: 46,
  }, {
    title: 'ТО-7', duration: '1', MilegeId: 7, CarModelId: 46,
  }, {
    title: 'ТО-8', duration: '4', MilegeId: 8, CarModelId: 46,
  },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < fullServices.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('FullServices', [{
        title: fullServices[i].title,
        duration: fullServices[i].duration,
        MilegeId: fullServices[i].MilegeId,
        CarModelId: fullServices[i].CarModelId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServices', null, {});
  },
};
