const express = require('express');
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    const adminByPhone = await Admin.findOne({
      where: {
        phone,
      },
    });

    if (!adminByPhone) {
      res.status(401).json({
        user: false,
        message: 'Админа с таким телефоном не существует',
      });
    }

    const isValidPassword = await bcrypt.compare(password, adminByPhone.password);

    if (!isValidPassword) {
      return res.status(401).json({
        admin: false,
        message: 'Пароль не верный',
      });
    }

    req.session.admin = {
      id: adminByPhone.id,
      firstname: adminByPhone.firstname,
      parentname: adminByPhone.parentname,
      lastname: adminByPhone.lastname,
      phone: adminByPhone.phone,
      email: adminByPhone.email,
    };
    res.json({ admin: req.session.admin });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
