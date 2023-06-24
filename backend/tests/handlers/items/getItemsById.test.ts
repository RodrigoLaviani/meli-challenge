import { getItemsById } from '../../../src/handlers/items';
import * as service from '../../../src/services/meli.service';
import { descriptionMock } from '../../mocks/meliServices/description';
import { itemMock } from '../../mocks/meliServices/item';

describe('Test getItemsById handler: ', () => {
    test('Get Item success way', async () => {
        const searchItemByIdSpy = jest
        .spyOn(service, 'searchItemById')
        .mockResolvedValueOnce(itemMock);

        const searchItemByIdWithDescriptionSpy = jest
        .spyOn(service, 'searchItemByIdWithDescription')
        .mockResolvedValueOnce(descriptionMock);

        const result = await getItemsById('MLA1121239971');

        expect(result.item.id).toBe('MLA1121239971');
        expect(result.item.price.amount).toEqual(488000);

        expect(searchItemByIdSpy).toBeCalledTimes(1);
        expect(searchItemByIdWithDescriptionSpy).toBeCalledTimes(1);

        searchItemByIdSpy.mockRestore();
        searchItemByIdWithDescriptionSpy.mockRestore();
    })
    test('Get Item exception way', async () => {
        const searchItemByIdSpy = jest
        .spyOn(service, 'searchItemById')
        .mockResolvedValueOnce(itemMock);

        const searchItemByIdWithDescriptionSpy = jest
        .spyOn(service, 'searchItemByIdWithDescription')
        .mockRejectedValueOnce(new Error('Internal Server Error'));

        try {
            await getItemsById('MLA1121239971');
        } catch (error: any) {
            expect(error.message).toBe('Internal Server Error');
        }

        expect(searchItemByIdSpy).toBeCalledTimes(1);
        expect(searchItemByIdWithDescriptionSpy).toBeCalledTimes(1);

        searchItemByIdSpy.mockRestore();
        searchItemByIdWithDescriptionSpy.mockRestore();
    })
})