const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/metrics', require('./routes/metrics'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/agencies', require('./routes/agencies'));
app.use('/api/ai', require('./routes/ai'));

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});