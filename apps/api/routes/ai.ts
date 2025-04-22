
import express from 'express';
const router = express.Router();

router.post('/ask', (req, res) => {
  const query = req.body.query;
  if (query.includes('overdue')) {
    res.json({ response: 'VA, DoE, and DoD have overdue invoices > 90 days.' });
  } else {
    res.json({ response: 'Insight not available.' });
  }
});

export default router;
