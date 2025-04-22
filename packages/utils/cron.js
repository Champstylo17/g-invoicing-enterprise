const cron = require('node-cron');

cron.schedule('0 8 * * *', () => {
  console.log('📧 Sending daily invoice summary email...');
  // Future: send summary via email
});

cron.schedule('0 0 * * *', () => {
  console.log('🕒 Auto-expiring unpaid agreements...');
  // Future: expire agreements in DB
});