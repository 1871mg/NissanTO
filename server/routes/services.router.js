const express = require('express');
const { FullService, Service, Component } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { carModelId, milegeId } = req.query;
    console.log(req.query);

    const fullService = await FullService.findAll({
      where: {
        MilegeId: +milegeId,
        CarModelId: +carModelId,
      },
      raw: true,
      include: [Service],
    });
    console.log(JSON.stringify(fullService, null, 3));

    // const services = await Service.findAll({ raw: true, include: [FullService] });

    res.json({ fullService });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
