const request = require('supertest');
import app from "../../application";
import * as handlers from "../../src/handlers/items";
import { searchItemByQueryMock } from "../mocks/responses/searchByQuery";

describe('Search Items by Query', () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(3000, () => {
      done();
    });
  });

  afterAll((done) => {
    server.close(() => {
      done();
    });
  });

  test('OK - 200', async () => {
    const getItemsByQuerySpy = jest
      .spyOn(handlers, 'getItemsByQuery')
      .mockResolvedValueOnce(searchItemByQueryMock);

    const query = "iPhone 13 nuevo";

    const response = await request(server)
      .get(`/api/items?q=${query}`);

    expect(response.statusCode).toBe(200);
    expect(getItemsByQuerySpy).toHaveBeenCalledTimes(1);

    expect(response.body.items[0].id).toBe("MLA1121239971")

    getItemsByQuerySpy.mockRestore();
  });

  test('Bad request - 400', async () => {
    const response = await request(server)
      .get(`/api/items`);

    expect(response.statusCode).toBe(400);
  });

  test('Internal server error - 500', async () => {
    const getItemsByQuerySpy = jest
      .spyOn(handlers, 'getItemsByQuery')
      .mockRejectedValueOnce(new Error('Internal server error'));

    const query = "iPhone 13 nuevo";

    const response = await request(server)
      .get(`/api/items?q=${query}`);

    expect(response.statusCode).toBe(500);
    expect(getItemsByQuerySpy).toHaveBeenCalledTimes(1);

    getItemsByQuerySpy.mockRestore();
  });
});