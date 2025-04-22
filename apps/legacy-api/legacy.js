const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

router.get('/invoice-process', (req, res) => {
  exec('wine ./packages/legacy-vb/invoice_tool.exe', (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

module.exports = router;