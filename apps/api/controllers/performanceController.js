exports.createPerformance = (req, res) => {
  const { orderId, description, completedAmount } = req.body;
  const performance = { orderId, description, completedAmount, status: 'Pending', created_at: new Date(), updated_at: new Date() };
  res.status(201).json(performance);
};

exports.getPerformances = (req, res) => {
  res.status(200).json([]);
};

exports.getPerformanceById = (req, res) => {
  const performanceId = req.params.id;
  res.status(200).json({ id: performanceId, status: 'Pending' });
};

exports.updatePerformance = (req, res) => {
  const performanceId = req.params.id;
  res.status(200).json({ id: performanceId, status: 'Completed' });
};

exports.deletePerformance = (req, res) => {
  res.status(200).json({ message: 'Performance deleted successfully' });
};