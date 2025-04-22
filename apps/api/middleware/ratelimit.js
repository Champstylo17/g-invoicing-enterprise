const limiters = new Map();

module.exports = function(req, res, next) {
  const tenantId = req.tenantId || 'anonymous';
  const now = Date.now();
  const window = 24 * 60 * 60 * 1000;
  const limit = 1000;

  if (!limiters.has(tenantId)) {
    limiters.set(tenantId, []);
  }

  const timestamps = limiters.get(tenantId).filter(ts => now - ts < window);
  if (timestamps.length >= limit) {
    return res.status(429).send('Rate limit exceeded');
  }

  timestamps.push(now);
  limiters.set(tenantId, timestamps);
  next();
};