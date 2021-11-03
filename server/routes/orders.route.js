const express = require('express');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;

    res.json({ orderId });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
