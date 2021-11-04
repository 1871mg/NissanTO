/* eslint-disable no-await-in-loop */
const express = require('express');
const getShortName = require('../utils/getShortName');
const getEndDate = require('../utils/getEndDate');
const setCurrentTimeZoneTimePlus = require('../utils/setCurrentTimeZoneTimePlus');
const setCurrentTimeZoneTimeMinus = require('../utils/setCurrentTimeZoneTimeMinus');
const sendEmail = require('../utils/sendEmail');
const getRandomWorker = require('../utils/getRandomWorker');

const {
  FullService, Order, Box, Worker,
  Car, Owner, CarModel, OrderService, OrderComponent,
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [FullService, Box, Worker],
    });

    // const activeOrders = orders.filter((order) => !order.isComplite);
    const scheduleUnSorted = [];

    for (let i = 0; i < orders.length; i += 1) {
      const order = orders[i];
      const startDate = new Date(order.timeStart.getTime()
        - (Math.abs(order.timeStart.getTimezoneOffset()) * 60 * 1000));
      const endDate = getEndDate(startDate, order.FullService.duration);

      const car = await Car.findOne({
        where: {
          id: order.CarId,
        },
      });
      const owner = await Owner.findOne({
        where: {
          id: car.OwnerId,
        },
      });
      const model = await CarModel.findOne({
        where: {
          id: car.CarModelId,
        },
      });
      const orderObj = {
        location: order.Box.title,
        id: order.id,
        title: order.FullService.title,
        startDate,
        endDate,
        isComplite: order.isComplite,
        carModel: model.title,
        ownerId: owner.id,
        carId: car.id,
        owner: getShortName(owner.firstname,
          owner.lastname,
          owner.parentname),
        worker: getShortName(order.Worker.firstname,
          order.Worker.lastname,
          order.Worker.parentname),
      };
      scheduleUnSorted.push(orderObj);
    }

    const scheduleData = scheduleUnSorted.sort((a, b) => new Date(a.startDate).getTime()
    - new Date(b.startDate).getTime());

    const activeScheduleData = scheduleData.filter((order) => !order.isComplite);
    res.json({ scheduleData, activeScheduleData });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      carId, serviceIds, componentIds, fullServiceId, startDate,
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
      const workers = await Worker.findAll();
      const randomWorker = getRandomWorker(workers);

      const newOrder = await Order.create({
        CarId: carId,
        WorkerId: randomWorker.id,
        BoxId: 1,
        FullServiceId: fullServiceId,
        timeStart: startDateNewOrder,
        isComplite: false,
      });

      const car = await Car.findOne({
        where: {
          id: newOrder.CarId,
        },
        include: CarModel,
      });
      const newOrderFullService = await FullService.findOne({
        where: {
          id: fullServiceId,
        },
      });

      const orderToRender = {
        location: 'Бокс 1',
        carId: newOrder.CarId,
        id: newOrder.id,
        carModel: car.CarModel.title,
        title: newOrderFullService.title,
        startDate: setCurrentTimeZoneTimeMinus(startDateNewOrder),
        endDate: setCurrentTimeZoneTimeMinus(endDateNewOrder),
        worker: getShortName(randomWorker.firstname,
          randomWorker.lastname,
          randomWorker.parentname),
      };

      // add additional services
      for (let i = 0; i < serviceIds.length; i += 1) {
        const newOrderService = await OrderService.findOrCreate({
          where: {
            OrderId: newOrder.id,
            ServiceId: serviceIds[i].value,
          },
        });
      }

      // add additional components

      for (let i = 0; i < componentIds.length; i += 1) {
        const newOrderComponent = await OrderComponent.findOrCreate({
          where: {
            OrderId: newOrder.id,
            ComponentId: componentIds[i].value,
          },
        });
      }

      const emailMsg = `Ваша запись успешно создана. Начало ТО - ${orderToRender.startDate}, окончание - ${orderToRender.endDate}`;
      sendEmail('nikkaminskiy.kk@mail.ru', 'Ниссан ТО', emailMsg);
//req.session.user.email
      res.json({
        isOrdered: true, orderToRender, endDateNewOrder, car,
      });
    } else {
      res.json({ isOrdered: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
