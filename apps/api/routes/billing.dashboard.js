const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({
    plan: 'Pro',
    invoices: [{ id: 1, amount: 100 }],
    usage: { apiCalls: 763, exportDownloads: 12 }
  });
});

module.exports = router;