const express = require('express')
const bcrypt = require('bcrypt')
const { Car } = require('../db/models')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { ownerId, modelId, stateNumber, yearIssue, milegeId } = req.body
    const ownerWithSameCar = await Car.findOne({
      where: {
        OwnerId: ownerId,
        stateNumber,
      },
    })

    if (ownerWithSameCar) {
      res.status(401).json({
        ownerCar: false,
        message: 'Ваш автомобиль уже есть в базе',
      })
    }

    const ownerCar = await Car.create({
      OwnerId: ownerId,
      CarModelId: modelId,
      stateNumber,
      yearIssue,
      MilegeId: milegeId,
    })

    console.log(ownerCar)

    res.json({ ownerCar })
  } catch (error) {
    console.log(error.message)
    res.status(401).end()
  }
})

module.exports = router
