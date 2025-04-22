const express = require('express');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

// Protect all invoice routes with JWT + role-based access
router.use(authenticateToken);
router.use(authorizeRoles('admin', 'user'));

router.get('/', (req, res) => {
  res.json({ message: `Hello from invoices for tenant ${req.tenantId}` });
});

module.exports = router;