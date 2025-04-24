require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/metrics', require('./routes/metrics'));
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/agencies', require('./routes/agencies'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/agreements', require('./routes/agreements'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/agreements', require('./routes/agreements'));
app.use('/api/audit', require('./routes/audit'));
app.use('/api/contractors', require('./routes/contractors'));
app.use('/api/permissions', require('./routes/permissions'));
app.use('/api/dictionary', require('./routes/dictionary'));
app.use('/api/timelines', require('./routes/timelines'));

// Start server
app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
