const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({ index: 'index' });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
