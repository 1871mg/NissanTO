const express = require('express')
const {
  FullService,
  Service,
  Component,
  FullServiseService,
} = require('../db/models')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { carModelId, milegeId } = req.query;
    const fullService = await FullService.findAll({
      where: {
        MilegeId: milegeId,
        CarModelId: carModelId,
      },
      include: [{
        model: Service,
        attributes: ['id', 'title', 'price'],
      }, {
        model: Component,
        attributes: ['id', 'title', 'price', 'counterType'],
      }],
    });

    const components = await Component.findAll();
    const services = await Service.findAll();

    res.json({ fullService, components, services });
  } catch (error) {
    console.log(error.message)
    res.status(500).end()
  }
})

module.exports = router
