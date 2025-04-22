
import express from 'express';
const router = express.Router();

router.get('/metrics', (req, res) => {
  res.json({
    topContractors: ['Leidos', 'Raytheon', 'Booz Allen'],
    backlog: 72,
    invoiceOverdue: 1842
  });
});

export default router;
