
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Jane Doe', role: 'analyst' }]);
});

export default router;
