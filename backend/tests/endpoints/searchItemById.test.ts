const request = require('supertest');
import app from '../..';

describe('Search Item by ID', () => {
  test('Validate if the service is up - OK 200', async () => {
    const response = await request(app)
      .get('/api/items/12345');

    expect(response.statusCode).toBe(200);
  });
});
