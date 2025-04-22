
import request from 'supertest';
import app from '../index.js';

describe('GET /agreements', () => {
  it('should return agreements for the agency', async () => {
    const res = await request(app).get('/agreements');
    expect(res.statusCode).toBe(200);
  });
});
