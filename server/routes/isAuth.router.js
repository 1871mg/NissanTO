const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const isUserAuth = !!req.session.user;
    const isAdminAuth = !!req.session.admin;
    if (isUserAuth) {
      if(!req.session.user.ownerCars.length){
        req.session.user.loginEntrance = true,
        req.session.user.registerEntrance = false
      }
      res.json({ user: req.session.user, admin: false });
    } else if (isAdminAuth) {
      res.json({ admin: req.session.admin, user: false });
    } else {
      res.json({ user: false, admin: false });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
