const express = require('express');
const getShortName = require('../utils/getShortName');

const {
  FullService, Order, Box, Worker,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [FullService, Box, Worker],
    });
    const activeOrders = orders.filter((order) => !order.isComplite);

    const scheduleData = activeOrders.map((order) => {
      const timeEndMs = order.timeStart.getTime() + (order.FullService.duration * 30 * 60 * 1000);
      const endDate = new Date(timeEndMs);

      return {
        location: order.Box.title,
        id: order.id,
        title: order.FullService.title,
        startDate: order.timeStart,
        endDate,
        worker: getShortName(order.Worker.firstname,
          order.Worker.lastname,
          order.Worker.parentname),
      };
    });

    res.json({ scheduleData });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [FullService, Box, Worker],
    });
    const activeOrders = orders.filter((order) => !order.isComplite);

    const scheduleData = activeOrders.map((order) => {
      const timeEndMs = order.timeStart.getTime() + (order.FullService.duration * 30 * 60 * 1000);
      const endDate = new Date(timeEndMs);

      return {
        location: order.Box.title,
        id: order.id,
        title: order.FullService.title,
        startDate: order.timeStart,
        endDate,
        worker: getShortName(order.Worker.firstname,
          order.Worker.lastname,
          order.Worker.parentname),
      };
    });
    
    res.json({ scheduleData });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
