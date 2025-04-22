
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ entity: 'Agreement', states: ['Draft', 'Approved', 'Obligated'] }]);
});

export default router;
