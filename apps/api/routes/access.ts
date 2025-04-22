
import express from 'express';
const router = express.Router();

router.post('/check', (req, res) => {
  res.json({ allowed: true });
});

export default router;
