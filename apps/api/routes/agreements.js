const express = require('express');
const router = express.Router();
const data = require('../mock_data/agreements.json');

router.get('/', (req, res) => {
  res.json(data);
});

module.exports = router;
