
import express from 'express';
const router = express.Router();

router.post('/export', (req, res) => {
  res.json({ status: 'success', message: 'Export plugin executed.' });
});

export default router;
