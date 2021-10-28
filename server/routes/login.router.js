const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const router = express.Router();

// eslint-disable-next-line consistent-return
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const userByEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (!userByEmail) {
      res.status(401).json({
        user: false,
        message: 'Пользователя с таким email не существует',
      });
    }

    const isValidPassword = await bcrypt.compare(password, userByEmail.password);

    if (!isValidPassword) {
      return res.status(401).json({
        user: false,
        message: 'Пароль не верный',
      });
    }

    req.session.user = {
      id: userByEmail.id,
      username: userByEmail.username,
      email: userByEmail.username,
    };

    res.json({ user: req.session.user });
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
});

module.exports = router;
