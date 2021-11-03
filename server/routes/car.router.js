const express = require('express')
const bcrypt = require('bcrypt')
const { Car, CarModel, Milege } = require('../db/models')

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

    const newOwnerCar = await Car.create({
      OwnerId: ownerId,
      CarModelId: modelId,
      stateNumber,
      yearIssue,
      MilegeId: milegeId,
    })
    
    const ownerCar = await Car.findOne({
      where: { id: newOwnerCar.id},
      include: [
        {
          model: CarModel,
          attributes: ['id', 'title',],
        },
        {
          model: Milege,
          attributes: ['id', 'distanse', 'years',]
        }
      ]
    })

    req.session.user.ownerCars.push(ownerCar)
    
    res.json({ ownerCar })
  } catch (error) {
    console.log(error.message)
    res.status(401).end()
  }
})

module.exports = router
