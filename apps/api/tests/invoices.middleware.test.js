const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
const invoiceRoutes = require('../routes/invoices');
const tenant = require('../middleware/tenant');

const app = express();
app.use(tenant);
app.use('/api/invoices', invoiceRoutes);

const token = jwt.sign({ id: '123', role: 'user' }, 'testsecret');

describe('Invoice Route with Middleware', () => {
  it('should allow access with valid token and role', async () => {
    const res = await request(app)
      .get('/api/invoices')
      .set('Authorization', `Bearer ${token}`)
      .set('x-tenant-id', 'tenant123');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain('tenant123');
  });

  it('should deny access without token', async () => {
    const res = await request(app).get('/api/invoices');
    expect(res.statusCode).toBe(401);
  });
});