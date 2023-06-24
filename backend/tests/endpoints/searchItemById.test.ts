const request = require('supertest');
import app from "../../application";
import * as handlers from "../../src/handlers/items";
import { searchByIdMock } from "../mocks/responses/searchById";

describe('Search Item by Id', () => {
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
    const getItemsByIdSpy = jest
    .spyOn(handlers, 'getItemsById')
    .mockResolvedValueOnce(searchByIdMock);

    const response = await request(server)
      .get(`/api/items/MLA1121239971`);

    expect(response.statusCode).toBe(200);
    expect(getItemsByIdSpy).toHaveBeenCalledTimes(1);

    expect(response.body.item.id).toBe("MLA1121239971")

    getItemsByIdSpy.mockRestore();
  });

  test('Bad request - 400', async () => {
    const response = await request(server)
      .get(`/api/items`);

    expect(response.statusCode).toBe(400);
  });

  test('Internal server error - 500', async () => {
    const getItemsByIdSpy = jest
      .spyOn(handlers, 'getItemsById')
      .mockRejectedValueOnce(new Error('Internal server error'));


    const response = await request(server)
      .get(`/api/items/MLA1121239971`);

    expect(response.statusCode).toBe(500);
    expect(getItemsByIdSpy).toHaveBeenCalledTimes(1);

    getItemsByIdSpy.mockRestore();
  });
});
