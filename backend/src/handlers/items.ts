import { buildSearchByIdResponse, buildSearchByQueryResponse } from "../models/builders";
import { SearchByIdResponse } from "../models/searchByIdResponse";
import { SearchByQueryResponse } from "../models/searchByQueryResponse";
import { searchItemById, searchItemByIdWithDescription, searchItemByQuery } from "../services/meli.service";

export const getItemsByQuery = async (query: any): Promise<SearchByQueryResponse> => {
    const items: any = await searchItemByQuery(query);

    return buildSearchByQueryResponse(items.results, items.filters);
};

export const getItemsById = async (id: string): Promise<SearchByIdResponse> => {
    let item: any, itemDescription: any;
    await Promise.all([searchItemById(id), searchItemByIdWithDescription(id)]).then(values => {
        item = values[0];
        itemDescription = values[1];
        });

    return buildSearchByIdResponse(item, itemDescription);
};