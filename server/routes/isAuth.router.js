const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const isUserAuth = !!req.session.user;
    const isAdminAuth = !!req.session.admin;
    const isWorkerAuth = !!req.session.worker;

    if (isUserAuth) {
      res.json({ user: req.session.user });
    } else if (isAdminAuth) {
      res.json({ admin: req.session.admin });
    } else if (isWorkerAuth) {
      res.json({ worker: req.session.worker });
    } else {
      res.json({ user: false, admin: false, worker: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
