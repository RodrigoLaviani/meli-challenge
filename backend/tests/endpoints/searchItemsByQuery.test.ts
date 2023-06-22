const request = require('supertest');
import app from '../..';

describe('Search Items by Query', () => {
  test('Validate if the service is up - OK 200', async () => {
    const query = 'category=MLA1055';

    const response = await request(app)
      .get(`/api/items?q=${query}`);

    expect(response.statusCode).toBe(200);
  });
});
