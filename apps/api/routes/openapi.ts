
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ openapi: '3.0.0', info: { title: 'G-Invoicing API', version: '1.0.0' } });
});

export default router;
