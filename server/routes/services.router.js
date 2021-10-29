const express = require('express');
const { FullService, Service } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { carModelId, milegeId } = req.query;
    const fullService = await FullService.findOne({
      where: {
        MilegeId: milegeId,
        CarModelId: carModelId,
      },
    });

    const services = await FullService.getService();

    res.json({ fullService, services });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
