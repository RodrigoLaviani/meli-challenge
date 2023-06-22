import { SearchByIdResponse } from "../models/searchByIdResponse";
import { SearchByQueryResponse } from "../models/searchByQueryResponse";
import { searchItemById, searchItemByIdWithDescription, searchItemByQuery } from "../services/meli.service";

export const getItemsByQuery = async (query: any): Promise<SearchByQueryResponse> => {
    const resultApi = await searchItemByQuery(query);
    return resultApi;
};

export const getItemsById = async (id: string): Promise<SearchByIdResponse> => {
    let resultApi, resultApiDescription;
    Promise.all([searchItemById(id), searchItemByIdWithDescription(id)]).then(values => {
        console.log(values)
        resultApi = values[0];
        resultApiDescription = values[1];
      });
    console.log(resultApi);
    console.log(resultApiDescription);
    return {} as SearchByIdResponse;
};