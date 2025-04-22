
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Department of Health and Human Services', region: 'Region 3' }]);
});

export default router;
