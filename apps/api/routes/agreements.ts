
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, title: 'Medicare Data IAA', amount: 12000000, status: 'Approved' }]);
});

export default router;
