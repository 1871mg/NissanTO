const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const isUserAuth = !!req.session.user;

    if (isUserAuth) {
      res.json({ user: req.session.user });
    } else {
      res.json({ user: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
