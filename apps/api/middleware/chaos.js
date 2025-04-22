module.exports = function(req, res, next) {
  if (process.env.CHAOS_MODE === 'true') {
    if (Math.random() < 0.2) {
      console.warn('⚠️ Chaos Monkey activated!');
      return res.status(503).send('Simulated failure');
    }
  }
  next();
};