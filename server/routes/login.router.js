const express = require('express')
const bcrypt = require('bcrypt')

const { Owner, Car, CarModel, Milege } = require('../db/models')

const router = express.Router()

// eslint-disable-next-line consistent-return
router.post('/', async (req, res) => {
  try {
    const { phone, password } = req.body

    const userByPhone = await Owner.findOne({
      where: {
        phone,
      },
    })

    if (!userByPhone) {
      res.status(401).json({
        user: false,
        message: 'Пользователя с таким телефоном не существует',
      })
    }

    const isValidPassword = await bcrypt.compare(password, userByPhone.password)

    if (!isValidPassword) {
      return res.status(401).json({
        user: false,
        message: 'Пароль не верный',
      })
    }

    const ownerCars = await Car.findAll({
      where: { OwnerId: userByPhone.id },
      include: [
        {
          model: CarModel,
          attributes: ['id', 'title',],
        },
        {
          model: Milege,
          attributes: ['id', 'distanse', 'years',]
        }
      ],
    })

    req.session.user = {
      id: userByPhone.id,
      firstname: userByPhone.firstname,
      parentname: userByPhone.parentname,
      lastname: userByPhone.lastname,
      phone: userByPhone.phone,
      email: userByPhone.email,
      ownerCars,
      loginEntrance: true
    }

    res.json({ user: req.session.user })
  } catch (error) {
    console.log(error.message)
    res.status(401).end()
  }
})

module.exports = router
