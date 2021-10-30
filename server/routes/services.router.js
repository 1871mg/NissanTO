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
    const { carModelId, milegeId } = req.query
    console.log(req.query)

    const fullService = await FullService.findAll(
      {
        // where: {
        //   MilegeId: +milegeId,
        //   CarModelId: +carModelId,
        // },
        // raw: true,
        include: [
          {
            model: FullServiseService,
            include: [FullService, Service]
          },
          {
            model: Service,
            include: {
              model: FullService,
              include: {
                model: FullServiseService,
                include: [FullService, Service]
              }
            }
          }
        ]})
        // include: {model : FullServiseService, include: [FullService, Service]}
      
  
      // {
      //   model: Service,
      //   include: {
      //     model: FullService,
      //     include: {
      //       model: FullServiseService,
      //       include: [FullService, Service],
      //     },
      //   },
      // },
    
    // console.log(JSON.stringify(fullService, null, 3));

    // const services = await Service.findAll({ raw: true, include: [FullService] });
    console.log(fullService);
    res.json({ fullService })
  } catch (error) {
    console.log(error.message)
    res.status(500).end()
  }
})

module.exports = router
