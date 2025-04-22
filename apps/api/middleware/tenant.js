module.exports = function(req, res, next) {
  const tenantId = req.headers['x-tenant-id'] || 'default';
  req.tenantId = tenantId;
  next();
};