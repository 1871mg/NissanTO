const express = require('express');
const {
  FullService, Car, Order, Service, Component, Worker, Owner, CarModel,
} = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await Order.findOne({
      where: {
        id: orderId,
      },
      include: [Service, Component, FullService, Car, Worker],
    });

    const ownerId = order.Car.OwnerId;
    const carId = order.Car.id;
    const fullServiceId = order.FullService.id;

    const fullService = await FullService.findOne({
      where: {
        id: fullServiceId,
      },
      include: [Service, Component],
    });

    const owner = await Owner.findOne({
      where: {
        id: ownerId,
      },
    });
    const car = await Car.findOne({
      where: {
        id: carId,
      },
    });
    const carModel = await CarModel.findOne({
      where: {
        id: car.CarModelId,
      },
    });

    res.json({
      order, owner, carModel, fullService, car,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;

    await Order.destroy({
      where: {
        id: orderId,
      },
    });

    res.json({
      isOrderDeleted: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.put('/', async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findOne({
      where: {
        id: orderId,
      },
    });
    order.isComplite = !order.isComplite;

    await order.save();

    res.json({
      isChangeStatus: true,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
