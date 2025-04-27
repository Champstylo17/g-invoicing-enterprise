exports.createOrder = (req, res) => {
  const { agreementId, agencyId, amount } = req.body;
  const order = { agreementId, agencyId, amount, status: 'Draft', created_at: new Date(), updated_at: new Date() };
  res.status(201).json(order);
};

exports.getOrders = (req, res) => {
  res.status(200).json([]);
};

exports.getOrderById = (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ id: orderId, status: 'Draft' });
};

exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ id: orderId, status: 'Approved' });
};

exports.deleteOrder = (req, res) => {
  res.status(200).json({ message: 'Order deleted successfully' });
};