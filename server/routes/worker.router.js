const express = require('express');
const bcrypt = require('bcrypt');
const { Worker } = require('../db/models');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const workerByPhone = await Worker.findOne({
      where: {
        phone,
      },
    });

    if (!workerByPhone) {
      res.status(401).json({
        user: false,
        message: 'Рабочего с таким телефоном не существует',
      });
    }

    const isValidPassword = await bcrypt.compare(password, workerByPhone.password);

    if (!isValidPassword) {
      return res.status(401).json({
        worker: false,
        message: 'Пароль не верный',
      });
    }
    
    req.session.worker = {
      id: workerByPhone.id,
      firstname: workerByPhone.firstname,
      parentname: workerByPhone.parentname,
      lastname: workerByPhone.lastname,
      phone: workerByPhone.phone,
      email: workerByPhone.email,
    };
    res.json({ worker: req.session.worker });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
