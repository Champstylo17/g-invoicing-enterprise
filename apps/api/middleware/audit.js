module.exports = function(req, res, next) {
  if (req.user) {
    console.log(`[AUDIT] ${req.user.id} - ${req.method} ${req.originalUrl}`);
  }
  next();
};