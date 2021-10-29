const express = require('express');
const { Model, Milege } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allModels = await Model.findAll();
    const allMilege = await Milege.findAll();
    res.json({ allModels, allMilege });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
