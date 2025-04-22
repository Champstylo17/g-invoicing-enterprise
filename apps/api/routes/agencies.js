const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { name: 'Department of Energy', region: 'West', subagency: 'Nuclear Security' },
    { name: 'Department of Agriculture', region: 'South', subagency: 'Food Safety' }
  ]);
});

module.exports = router;