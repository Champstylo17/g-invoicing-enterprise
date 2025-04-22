
import express from 'express';
const router = express.Router();

router.get('/agreement', (req, res) => {
  res.json({ entity: 'Agreement', fields: ['id', 'title', 'amount', 'agency_id'] });
});

export default router;
