const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const isUserAuth = !!req.session.user;
    const isAdminAuth = !!req.session.admin;

    if (isUserAuth) {
      res.json({ user: req.session.user });
    } else if (isAdminAuth) {
      res.json({ admin: req.session.admin });
    } else {
      res.json({ user: false, admin: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
