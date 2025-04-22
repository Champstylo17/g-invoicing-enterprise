const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    topContractors: ['Lockheed', 'Boeing', 'Raytheon'],
    backlog: 42,
    invoiceOverdue: 128
  });
});

module.exports = router;