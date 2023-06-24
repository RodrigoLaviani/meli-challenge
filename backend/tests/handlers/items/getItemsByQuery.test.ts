import { getItemsByQuery } from '../../../src/handlers/items';
import * as service from '../../../src/services/meli.service';
import { queryResultMock } from '../../mocks/meliServices/queryResult';

describe('Test getItemsByQuery handler: ', () => {
    test('Get Items success way', async () => {
        const searchItemByQuerySpy = jest
        .spyOn(service, 'searchItemByQuery')
        .mockResolvedValueOnce(queryResultMock);

        const result = await getItemsByQuery("iPhone 13 nuevo");

        expect(result.categories).toStrictEqual([
            "Celulares y Teléfonos",
            "Celulares y Smartphones"
        ]);
        expect(result.items[0].id).toBe('MLA1121239971');

        expect(searchItemByQuerySpy).toBeCalledTimes(1);

        searchItemByQuerySpy.mockRestore();
    })
    test('Get Items exception way', async () => {
        const searchItemByQuerySpy = jest
        .spyOn(service, 'searchItemByQuery')
        .mockRejectedValueOnce(new Error('Internal Server Error'));

        try {
            await getItemsByQuery("iPhone 13 nuevo");
        } catch (error: any) {
            expect(error.message).toBe('Internal Server Error');
        }

        expect(searchItemByQuerySpy).toBeCalledTimes(1);

        searchItemByQuerySpy.mockRestore();
    })
})