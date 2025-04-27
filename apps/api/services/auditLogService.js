exports.recordAction = (action, userId) => {
  console.log(`Audit Log: User ${userId} performed action: ${action}`);
  return { action, userId, timestamp: new Date() };
};