const express = require('express');
const router = express.Router();

router.get('/env-check', (req, res) => {
  const keys = ['DB_ENGINE', 'MONGO_URI', 'JWT_SECRET', 'PORT'];
  const envStatus = keys.map(key => ({
    key,
    value: process.env[key] || 'MISSING',
    ok: !!process.env[key]
  }));
  res.json({ status: envStatus });
});

module.exports = router;