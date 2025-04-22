
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, type: 'slack', message: 'Agreement overdue notification sent.' }]);
});

export default router;
