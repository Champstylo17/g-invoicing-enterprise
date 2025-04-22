const express = require('express');
const router = express.Router();

router.post('/subscribe', (req, res) => {
  console.log('🔔 Subscribing user to Stripe (stub)');
  res.send({ status: 'subscribed' });
});

router.post('/webhook', (req, res) => {
  console.log('📩 Received Stripe webhook');
  res.send({ received: true });
});

module.exports = router;