const express = require('express');
const getShortName = require('../utils/getShortName');
const getEndDate = require('../utils/getEndDate');
const setCurrentTimeZoneTimePlus = require('../utils/setCurrentTimeZoneTimePlus');
const setCurrentTimeZoneTimeMinus = require('../utils/setCurrentTimeZoneTimeMinus');

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
      const startDate = new Date(order.timeStart.getTime()
       - (Math.abs(order.timeStart.getTimezoneOffset()) * 60 * 1000));
      const endDate = getEndDate(startDate, order.FullService.duration);

      return {
        location: order.Box.title,
        id: order.id,
        title: order.FullService.title,
        startDate,
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
    const {
      carId, serviceIds, fullServiceId, startDate,
    } = req.body;

    const startDateNewOrder = setCurrentTimeZoneTimePlus(new Date(startDate));
    const fullService = await FullService.findOne({ where: { id: fullServiceId } });
    const endDateNewOrder = getEndDate(startDateNewOrder, fullService.duration);

    const orders = await Order.findAll({
      include: [FullService, Box, Worker],
    });
    const activeOrders = orders.filter((order) => !order.isComplite);
    let isTimeOccupied = false;

    for (let i = 0; i < activeOrders.length; i += 1) {
      const startOrderDate = activeOrders[i].timeStart;
      const endOrderDate = getEndDate(startOrderDate, activeOrders[i].FullService.duration);

      if ((startDateNewOrder.getTime() >= startOrderDate.getTime()
              && startDateNewOrder.getTime() < endOrderDate.getTime())
          || (endDateNewOrder.getTime() > startOrderDate.getTime()
              && endDateNewOrder.getTime() <= endOrderDate.getTime())) {
        isTimeOccupied = true;
        break;
      }
    }

    if (!isTimeOccupied) {
      const newOrder = await Order.create({
        CarId: carId,
        WorkerId: 1,
        BoxId: 1,
        FullServiceId: fullServiceId,
        timeStart: startDateNewOrder,
        //MilegeId: 2,
        isComplite: false,
      });
      const newOrderFullService = await FullService.findOne({
        where: {
          id: fullServiceId,
        },
      });
      const newWorker = await Worker.findOne({
        where: {
          id: newOrder.WorkerId,
        },
      });
      const orderToRender = {
        location: 'Бокс 1',
        id: newOrder.id,
        title: newOrderFullService.title,
        startDate: setCurrentTimeZoneTimeMinus(startDateNewOrder),
        endDate: setCurrentTimeZoneTimeMinus(endDateNewOrder),
        worker: getShortName(newWorker.firstname,
          newWorker.lastname,
          newWorker.parentname),
      };
      console.log(orderToRender);
      res.json({ isOrdered: true, orderToRender, endDateNewOrder });
    } else {
      res.json({ isOrdered: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
