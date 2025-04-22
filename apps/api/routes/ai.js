const express = require('express');
const router = express.Router();

router.post('/ask', (req, res) => {
  res.json({ response: 'Top overdue agencies are DoD, HHS, and VA.' });
});

module.exports = router;