
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Leidos', sam_id: 'SAM123456' }]);
});

export default router;
