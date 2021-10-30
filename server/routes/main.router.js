const express = require('express');
const { CarModel, Milege, FullService } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allModels = await CarModel.findAll({ attributes: ['id', 'title'] });
    const allMilege = await Milege.findAll({ attributes: ['id', 'distanse', 'years'] });

    res.json({ allMilege, allModels });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
