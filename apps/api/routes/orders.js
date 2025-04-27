const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');

router.post('/orders', createOrder); 
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById); 
router.put('/orders/:id', updateOrder); 
router.delete('/orders/:id', deleteOrder);

module.exports = router;