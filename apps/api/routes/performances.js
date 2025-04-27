const express = require('express');
const router = express.Router();
const { createPerformance, getPerformances, getPerformanceById, updatePerformance, deletePerformance } = require('../controllers/performanceController');

router.post('/performances', createPerformance); 
router.get('/performances', getPerformances); 
router.get('/performances/:id', getPerformanceById); 
router.put('/performances/:id', updatePerformance); 
router.delete('/performances/:id', deletePerformance); 

module.exports = router;