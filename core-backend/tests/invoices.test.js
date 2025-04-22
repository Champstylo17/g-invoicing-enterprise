
import request from 'supertest';
import app from '../index.js';

describe('GET /invoices', () => {
  it('should return invoice list', async () => {
    const res = await request(app).get('/invoices');
    expect(res.statusCode).toBe(200);
  });
});
