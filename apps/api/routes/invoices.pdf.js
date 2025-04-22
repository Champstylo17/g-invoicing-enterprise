const express = require('express');
const router = express.Router();

router.post('/:id/pdf', (req, res) => {
  const invoiceId = req.params.id;
  console.log(`Generating PDF for invoice ${invoiceId}...`);
  res.send(`PDF for invoice ${invoiceId} (stub)`);
});

module.exports = router;
const notify = require('../socket');

router.post('/:id/pdf', (req, res) => {
  const invoiceId = req.params.id;
  notify.notifyAll('invoice:pdf_ready', { invoiceId });
  res.send(`PDF for invoice ${invoiceId} (stub)`);
});