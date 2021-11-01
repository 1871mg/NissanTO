const express = require('express');
const bcrypt = require('bcrypt');
const { Owner } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { firstname, parentname, lastname,  email, password, phone } = req.body;

    const userWithSameEmail = await Owner.findOne({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      res.status(401).json({
        user: false,
        message: 'Пользователь с таким email уже существует',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Owner.create({ firstname, parentname, lastname,  email, phone, password: hashedPassword });

    req.session.user = {
      id: user.id,
      firstname: user.firstname,
      parentname: user.parentname,
      lastname: user.lastname,
      phone: user.phone,
      email: user.email,
    };

    res.json({ user: req.session.user });
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
