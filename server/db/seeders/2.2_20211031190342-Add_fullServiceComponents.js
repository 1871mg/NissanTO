const fullServiceComponents = [
  // Almera (G15)
  { FullServiceId: 1, ComponentId: 46 },
  { FullServiceId: 1, ComponentId: 27 },
  { FullServiceId: 1, ComponentId: 21 },
  { FullServiceId: 1, ComponentId: 4 },
  { FullServiceId: 1, ComponentId: 24 },

  // Almera (G15) ТО-2
  { FullServiceId: 2, ComponentId: 46 },
  { FullServiceId: 2, ComponentId: 27 },
  { FullServiceId: 2, ComponentId: 21 },
  { FullServiceId: 2, ComponentId: 4 },
  { FullServiceId: 2, ComponentId: 26 },
  { FullServiceId: 2, ComponentId: 39 },
  { FullServiceId: 2, ComponentId: 48 },

  // Almera (G15) ТО-3
  { FullServiceId: 3, ComponentId: 46 },
  { FullServiceId: 3, ComponentId: 27 },
  { FullServiceId: 3, ComponentId: 21 },
  { FullServiceId: 3, ComponentId: 4 },
  { FullServiceId: 3, ComponentId: 24 },

  // Almera (G15) ТО-4
  { FullServiceId: 4, ComponentId: 46 },
  { FullServiceId: 4, ComponentId: 27 },
  { FullServiceId: 4, ComponentId: 21 },
  { FullServiceId: 4, ComponentId: 4 },
  { FullServiceId: 4, ComponentId: 24 },
  { FullServiceId: 4, ComponentId: 26 },
  { FullServiceId: 4, ComponentId: 39 },
  { FullServiceId: 4, ComponentId: 48 },

  // Almera (G15) ТО-5
  { FullServiceId: 5, ComponentId: 46 },
  { FullServiceId: 5, ComponentId: 27 },
  { FullServiceId: 5, ComponentId: 21 },
  { FullServiceId: 5, ComponentId: 4 },
  { FullServiceId: 5, ComponentId: 24 },

  // Almera (G15) ТО-6
  { FullServiceId: 6, ComponentId: 46 },
  { FullServiceId: 6, ComponentId: 27 },
  { FullServiceId: 6, ComponentId: 21 },
  { FullServiceId: 6, ComponentId: 4 },
  { FullServiceId: 6, ComponentId: 24 },
  { FullServiceId: 6, ComponentId: 26 },
  { FullServiceId: 6, ComponentId: 39 },
  { FullServiceId: 6, ComponentId: 48 },

  // Almera (G15) ТО-7
  { FullServiceId: 7, ComponentId: 46 },
  { FullServiceId: 7, ComponentId: 27 },
  { FullServiceId: 7, ComponentId: 21 },
  { FullServiceId: 7, ComponentId: 4 },
  { FullServiceId: 7, ComponentId: 24 },

  // Almera (G15) ТО-8
  { FullServiceId: 8, ComponentId: 46 },
  { FullServiceId: 8, ComponentId: 27 },
  { FullServiceId: 8, ComponentId: 21 },
  { FullServiceId: 8, ComponentId: 4 },
  { FullServiceId: 8, ComponentId: 24 },
  { FullServiceId: 8, ComponentId: 26 },
  { FullServiceId: 8, ComponentId: 39 },
  { FullServiceId: 8, ComponentId: 48 },

  // // Nissan Almera Classic (B10)
  // { FullServiceId: 9, ComponentId: 6 },
  // { FullServiceId: 9, ComponentId: 25 },
  // { FullServiceId: 9, ComponentId: 35 },
  // { FullServiceId: 9, ComponentId: 24 },

  // //	Nissan Note (E11) 1,4	17
  // { FullServiceId: 17, ComponentId: 14 },
  // { FullServiceId: 17, ComponentId: 19 },
  // { FullServiceId: 17, ComponentId: 24 },
  // { FullServiceId: 17, ComponentId: 28 },
  // { FullServiceId: 17, ComponentId: 45 },

  // //	Nissan Note (E11) 1,6	25
  // { FullServiceId: 25, ComponentId: 24 },
  // { FullServiceId: 25, ComponentId: 16 },
  // { FullServiceId: 25, ComponentId: 19 },
  // { FullServiceId: 25, ComponentId: 25 },
  // { FullServiceId: 25, ComponentId: 27 },

  // //	Nissan Tiida (C11) 1,6	33
  // { FullServiceId: 33, ComponentId: 24 },
  // { FullServiceId: 33, ComponentId: 16 },
  // { FullServiceId: 33, ComponentId: 25 },
  // { FullServiceId: 33, ComponentId: 27 },

  // //	Nissan Tiida (C11) 1,8	41
  // { FullServiceId: 41, ComponentId: 24 },
  // { FullServiceId: 41, ComponentId: 13 },
  // { FullServiceId: 41, ComponentId: 27 },
  // { FullServiceId: 41, ComponentId: 25 },

  // //	Nissan Tiida (C13)	49
  // { FullServiceId: 49, ComponentId: 24 },
  // { FullServiceId: 49, ComponentId: 25 },
  // { FullServiceId: 49, ComponentId: 16 },
  // { FullServiceId: 49, ComponentId: 31 },

  // //	Nissan Juke (F15) 1,6	57
  // { FullServiceId: 57, ComponentId: 24 },
  // { FullServiceId: 57, ComponentId: 25 },
  // { FullServiceId: 57, ComponentId: 16 },
  // { FullServiceId: 57, ComponentId: 27 },
  // { FullServiceId: 57, ComponentId: 53 },

  // //	Nissan Juke (F15) 1,6 турбо	65
  // { FullServiceId: 65, ComponentId: 24 },
  // { FullServiceId: 65, ComponentId: 25 },
  // { FullServiceId: 65, ComponentId: 10 },
  // { FullServiceId: 65, ComponentId: 27 },

  // //	Nissan Sentra (B17)	73
  // { FullServiceId: 73, ComponentId: 24 },
  // { FullServiceId: 73, ComponentId: 25 },
  // { FullServiceId: 73, ComponentId: 16 },
  // { FullServiceId: 73, ComponentId: 31 },
  // { FullServiceId: 73, ComponentId: 50 },

  // //	Nissan Qashqai (J10) 1,6	81
  // { FullServiceId: 81, ComponentId: 24 },
  // { FullServiceId: 81, ComponentId: 25 },
  // { FullServiceId: 81, ComponentId: 16 },
  // { FullServiceId: 81, ComponentId: 27 },

  // //	Nissan Qashqai (J10) 2,0	89
  // { FullServiceId: 89, ComponentId: 24 },
  // { FullServiceId: 89, ComponentId: 25 },
  // { FullServiceId: 89, ComponentId: 13 },
  // { FullServiceId: 89, ComponentId: 27 },
  // { FullServiceId: 89, ComponentId: 40 },
  // { FullServiceId: 89, ComponentId: 42 },

  // //	Nissan Qashqai (J11) 1,2 турбо	97
  // { FullServiceId: 97, ComponentId: 24 },
  // { FullServiceId: 97, ComponentId: 25 },
  // { FullServiceId: 97, ComponentId: 1 },
  // { FullServiceId: 97, ComponentId: 33 },
  // { FullServiceId: 97, ComponentId: 51 },

  // //	Nissan Qashqai (J11) 1,6 турбодизель	105
  // { FullServiceId: 105, ComponentId: 24 },
  // { FullServiceId: 105, ComponentId: 25 },
  // { FullServiceId: 105, ComponentId: 9 },
  // { FullServiceId: 105, ComponentId: 32 },
  // { FullServiceId: 105, ComponentId: 51 },

  // //	Nissan Qashqai (J11) 2,0	113
  // { FullServiceId: 113, ComponentId: 24 },
  // { FullServiceId: 113, ComponentId: 25 },
  // { FullServiceId: 113, ComponentId: 5 },
  // { FullServiceId: 113, ComponentId: 27 },
  // { FullServiceId: 113, ComponentId: 41 },
  // { FullServiceId: 113, ComponentId: 42 },
  // { FullServiceId: 113, ComponentId: 51 },

  // //	Nissan Teana (J32) 2,5 рядный	121
  // { FullServiceId: 121, ComponentId: 24 },
  // { FullServiceId: 121, ComponentId: 25 },
  // { FullServiceId: 121, ComponentId: 7 },
  // { FullServiceId: 121, ComponentId: 27 },
  // { FullServiceId: 121, ComponentId: 42 },

  // //	Nissan Teana (J32) 2,5 VQ	129
  // { FullServiceId: 129, ComponentId: 24 },
  // { FullServiceId: 129, ComponentId: 25 },
  // { FullServiceId: 129, ComponentId: 7 },
  // { FullServiceId: 129, ComponentId: 27 },
  // { FullServiceId: 129, ComponentId: 42 },

  // //	Nissan Teana (J32) 3,5	137
  // { FullServiceId: 137, ComponentId: 24 },
  // { FullServiceId: 137, ComponentId: 25 },
  // { FullServiceId: 137, ComponentId: 7 },
  // { FullServiceId: 137, ComponentId: 27 },

  // //	Nissan Teana (L33) 2,5	145
  // { FullServiceId: 145, ComponentId: 24 },
  // { FullServiceId: 145, ComponentId: 25 },
  // { FullServiceId: 145, ComponentId: 7 },
  // { FullServiceId: 145, ComponentId: 27 },

  // //	Nissan Teana (L33) 3,5	153
  // { FullServiceId: 153, ComponentId: 24 },
  // { FullServiceId: 153, ComponentId: 25 },
  // { FullServiceId: 153, ComponentId: 7 },
  // { FullServiceId: 153, ComponentId: 27 },

  // //	Nissan Terrano (D10) 1,6	161
  // { FullServiceId: 161, ComponentId: 24 },
  // { FullServiceId: 161, ComponentId: 25 },
  // { FullServiceId: 161, ComponentId: 21 },
  // { FullServiceId: 161, ComponentId: 27 },
  // { FullServiceId: 161, ComponentId: 54 },

  // //	Nissan Terrano (D10) 2,0	169
  // { FullServiceId: 169, ComponentId: 24 },
  // { FullServiceId: 169, ComponentId: 25 },
  // { FullServiceId: 169, ComponentId: 21 },
  // { FullServiceId: 169, ComponentId: 27 },
  // { FullServiceId: 169, ComponentId: 54 },

  // //	Nissan Terrano (D10) 1,6 2016	177
  // { FullServiceId: 177, ComponentId: 24 },
  // { FullServiceId: 177, ComponentId: 25 },
  // { FullServiceId: 177, ComponentId: 17 },
  // { FullServiceId: 177, ComponentId: 37 },
  // { FullServiceId: 177, ComponentId: 48 },
  // { FullServiceId: 177, ComponentId: 54 },

  // //	Nissan Terrano (D10) 2,0 2016	185
  // { FullServiceId: 185, ComponentId: 24 },
  // { FullServiceId: 185, ComponentId: 25 },
  // { FullServiceId: 185, ComponentId: 12 },
  // { FullServiceId: 185, ComponentId: 27 },
  // { FullServiceId: 185, ComponentId: 49 },
  // { FullServiceId: 185, ComponentId: 54 },

  // //	Nissan X-Trail (T31) 2,0	193
  // { FullServiceId: 193, ComponentId: 24 },
  // { FullServiceId: 193, ComponentId: 25 },
  // { FullServiceId: 193, ComponentId: 13 },
  // { FullServiceId: 193, ComponentId: 27 },
  // { FullServiceId: 193, ComponentId: 40 },
  // { FullServiceId: 193, ComponentId: 42 },

  // //	Nissan X-Trail (T31) 2,0 турбодизель	201
  // { FullServiceId: 201, ComponentId: 24 },
  // { FullServiceId: 201, ComponentId: 25 },
  // { FullServiceId: 201, ComponentId: 11 },
  // { FullServiceId: 201, ComponentId: 34 },
  // { FullServiceId: 201, ComponentId: 40 },
  // { FullServiceId: 201, ComponentId: 42 },

  // //	Nissan X-Trail (T31) 2,5	209
  // { FullServiceId: 209, ComponentId: 24 },
  // { FullServiceId: 209, ComponentId: 25 },
  // { FullServiceId: 209, ComponentId: 15 },
  // { FullServiceId: 209, ComponentId: 27 },
  // { FullServiceId: 209, ComponentId: 40 },
  // { FullServiceId: 209, ComponentId: 42 },

  // //	Nissan X-Trail (T32) 1,6 турбодизель	217
  // { FullServiceId: 217, ComponentId: 24 },
  // { FullServiceId: 217, ComponentId: 25 },
  // { FullServiceId: 217, ComponentId: 9 },
  // { FullServiceId: 217, ComponentId: 32 },
  // { FullServiceId: 217, ComponentId: 40 },
  // { FullServiceId: 217, ComponentId: 42 },
  // { FullServiceId: 217, ComponentId: 52 },

  // //	Nissan X-Trail (T32) 2,0	225
  // { FullServiceId: 225, ComponentId: 24 },
  // { FullServiceId: 225, ComponentId: 25 },
  // { FullServiceId: 225, ComponentId: 5 },
  // { FullServiceId: 225, ComponentId: 27 },
  // { FullServiceId: 225, ComponentId: 41 },
  // { FullServiceId: 225, ComponentId: 42 },
  // { FullServiceId: 225, ComponentId: 51 },

  // //	Nissan X-Trail (T32) 2,5	233
  // { FullServiceId: 233, ComponentId: 24 },
  // { FullServiceId: 233, ComponentId: 25 },
  // { FullServiceId: 233, ComponentId: 7 },
  // { FullServiceId: 233, ComponentId: 31 },
  // { FullServiceId: 233, ComponentId: 41 },
  // { FullServiceId: 233, ComponentId: 42 },
  // { FullServiceId: 233, ComponentId: 51 },

  // //	Nissan Murano (Z51)	241
  // { FullServiceId: 241, ComponentId: 24 },
  // { FullServiceId: 241, ComponentId: 25 },
  // { FullServiceId: 241, ComponentId: 7 },
  // { FullServiceId: 241, ComponentId: 42 },
  // { FullServiceId: 241, ComponentId: 27 },

  // //	Nissan Murano (Z52) 2,5 гибрид	249
  // { FullServiceId: 249, ComponentId: 24 },
  // { FullServiceId: 249, ComponentId: 25 },
  // { FullServiceId: 249, ComponentId: 3 },
  // { FullServiceId: 249, ComponentId: 29 },
  // { FullServiceId: 249, ComponentId: 41 },
  // { FullServiceId: 249, ComponentId: 42 },
  // { FullServiceId: 249, ComponentId: 52 },

  // //	Nissan Murano (Z52) 3,5	257
  // { FullServiceId: 257, ComponentId: 24 },
  // { FullServiceId: 257, ComponentId: 25 },
  // { FullServiceId: 257, ComponentId: 7 },
  // { FullServiceId: 257, ComponentId: 31 },
  // { FullServiceId: 257, ComponentId: 41 },
  // { FullServiceId: 257, ComponentId: 42 },
  // { FullServiceId: 257, ComponentId: 52 },

  // //	Nissan Navara (D40) 2,5 турбодизель	265
  // { FullServiceId: 265, ComponentId: 24 },
  // { FullServiceId: 265, ComponentId: 25 },
  // { FullServiceId: 265, ComponentId: 2 },
  // { FullServiceId: 265, ComponentId: 30 },
  // { FullServiceId: 265, ComponentId: 41 },
  // { FullServiceId: 265, ComponentId: 42 },

  // //	Nissan Navara (D40) 2,5 турбодизель DPF	273
  // { FullServiceId: 273, ComponentId: 24 },
  // { FullServiceId: 273, ComponentId: 25 },
  // { FullServiceId: 273, ComponentId: 18 },
  // { FullServiceId: 273, ComponentId: 22 },
  // { FullServiceId: 273, ComponentId: 42 },

  // //	Nissan Navara (D40) 3,0 турбодизель	281
  // { FullServiceId: 281, ComponentId: 24 },
  // { FullServiceId: 281, ComponentId: 25 },
  // { FullServiceId: 281, ComponentId: 18 },
  // { FullServiceId: 281, ComponentId: 22 },
  // { FullServiceId: 281, ComponentId: 42 },

  // //	Nissan Pickup (D22) 2,5 турбодизель	289
  // { FullServiceId: 289, ComponentId: 24 },
  // { FullServiceId: 289, ComponentId: 25 },
  // { FullServiceId: 289, ComponentId: 16 },
  // { FullServiceId: 289, ComponentId: 20 },
  // { FullServiceId: 289, ComponentId: 26 },
  // { FullServiceId: 289, ComponentId: 30 },
  // { FullServiceId: 289, ComponentId: 38 },

  // //	Nissan Pickup (D22) 2,5 турбодизель 4WD	297
  // { FullServiceId: 297, ComponentId: 24 },
  // { FullServiceId: 297, ComponentId: 25 },
  // { FullServiceId: 297, ComponentId: 16 },
  // { FullServiceId: 297, ComponentId: 20 },
  // { FullServiceId: 297, ComponentId: 26 },
  // { FullServiceId: 297, ComponentId: 30 },
  // { FullServiceId: 297, ComponentId: 38 },

  // //	Nissan Pathfinder (R51) 2,5 турбодизель	305
  // { FullServiceId: 305, ComponentId: 24 },
  // { FullServiceId: 305, ComponentId: 2 },
  // { FullServiceId: 305, ComponentId: 30 },
  // { FullServiceId: 305, ComponentId: 41 },
  // { FullServiceId: 305, ComponentId: 42 },
  // { FullServiceId: 305, ComponentId: 43 },

  // //	Nissan Pathfinder (R51) 2,5 турбодизель DPF	313
  // { FullServiceId: 313, ComponentId: 24 },
  // { FullServiceId: 313, ComponentId: 2 },
  // { FullServiceId: 313, ComponentId: 30 },
  // { FullServiceId: 313, ComponentId: 41 },
  // { FullServiceId: 313, ComponentId: 42 },
  // { FullServiceId: 313, ComponentId: 43 },

  // //	Nissan Pathfinder (R51) 3,0 турбодизель	321
  // { FullServiceId: 321, ComponentId: 24 },
  // { FullServiceId: 321, ComponentId: 25 },
  // { FullServiceId: 321, ComponentId: 18 },
  // { FullServiceId: 321, ComponentId: 22 },
  // { FullServiceId: 321, ComponentId: 42 },

  // //	Nissan Pathfinder (R51) 4,0	329
  // { FullServiceId: 329, ComponentId: 24 },
  // { FullServiceId: 329, ComponentId: 25 },
  // { FullServiceId: 329, ComponentId: 18 },
  // { FullServiceId: 329, ComponentId: 22 },
  // { FullServiceId: 329, ComponentId: 42 },

  // //	Nissan Pathfinder (R52) 2,5 гибрид	337
  // { FullServiceId: 337, ComponentId: 24 },
  // { FullServiceId: 337, ComponentId: 25 },
  // { FullServiceId: 337, ComponentId: 3 },
  // { FullServiceId: 337, ComponentId: 23 },
  // { FullServiceId: 337, ComponentId: 29 },
  // { FullServiceId: 337, ComponentId: 41 },
  // { FullServiceId: 337, ComponentId: 44 },

  // //	Nissan Pathfinder (R52) 3,5	345
  // { FullServiceId: 345, ComponentId: 24 },
  // { FullServiceId: 345, ComponentId: 25 },
  // { FullServiceId: 345, ComponentId: 4 },
  // { FullServiceId: 345, ComponentId: 23 },
  // { FullServiceId: 345, ComponentId: 31 },
  // { FullServiceId: 345, ComponentId: 41 },

  // //	Nissan Patrol (Y62)	353
  // { FullServiceId: 353, ComponentId: 24 },
  // { FullServiceId: 353, ComponentId: 25 },
  // { FullServiceId: 353, ComponentId: 35 },
  // { FullServiceId: 353, ComponentId: 42 },

  // //	Nissan Cabstar (F24)	361
  // { FullServiceId: 361, ComponentId: 24 },
  // { FullServiceId: 361, ComponentId: 8 },
  // { FullServiceId: 361, ComponentId: 36 },
  // { FullServiceId: 361, ComponentId: 39 },
  // { FullServiceId: 361, ComponentId: 47 },
]

const model1 = () => {
  const modelArr = []
  for (let i = 1; i < 185; i += 1) {
    modelArr.push(
      { FullServiceId: i, ComponentId: 24 },
      { FullServiceId: i, ComponentId: 25 },
      { FullServiceId: i, ComponentId: 7 },
      { FullServiceId: i, ComponentId: 31 },
      { FullServiceId: i, ComponentId: 41 },
      { FullServiceId: i, ComponentId: 42 },
      { FullServiceId: i, ComponentId: 52 }
    )
  }
  return modelArr
}
const model2 = () => {
  const modelArr = []
  for (let i = 185; i < 369; i += 1) {
    modelArr.push(
      { FullServiceId: i, ComponentId: 24 },
      { FullServiceId: i, ComponentId: 25 },
      { FullServiceId: i, ComponentId: 7 },
      { FullServiceId: i, ComponentId: 31 },
      { FullServiceId: i, ComponentId: 41 },
      { FullServiceId: i, ComponentId: 42 },
      { FullServiceId: i, ComponentId: 52 }
    )
  }
  return modelArr
}

const arr1 = model1()
const arr2 = model2()

const arr = [...arr1, ...arr2]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < arr.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert(
        'FullServiceComponents',
        [
          {
            FullServiceId: arr[i].FullServiceId,
            ComponentId: arr[i].ComponentId,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      )
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FullServiceComponents', null, {})
  },
}
