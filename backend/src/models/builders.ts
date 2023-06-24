import { SearchByIdResponse } from "./searchByIdResponse"
import { ItemQuerySearch, SearchByQueryResponse } from "./searchByQueryResponse"

export const buildSearchByIdResponse = (item: any, description: any) : SearchByIdResponse => {
    const [amount, decimals] = item.price.toString().split(".");

    return {
        author: {
            name: 'Rodrigo',
            lastname: 'Laviani'
        },
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: parseInt(amount),
          decimals: parseInt(decimals)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text
      }
    } as SearchByIdResponse;
}

export const buildSearchByQueryResponse = (items: any, filters: any) : SearchByQueryResponse => {
    return {
        author: {
            name: 'Rodrigo',
            lastname: 'Laviani'
        },
        categories: getCategories(filters),
        items: getItems(items)
    } as SearchByQueryResponse
}

const getItems = (items: any) : ItemQuerySearch[] => {
    const result : ItemQuerySearch[] = items.slice(0, 4).map((item: any) => {
        const [amount, decimals] = item.price.toString().split(".");

        return {
            id: item.id,
            title: item.title,
            picture: item.thumbnail,
            condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
            free_shipping: item.shipping.free_shipping,
            price: {
                amount: item.price,
                currency: parseInt(amount),
                decimals: parseInt(decimals)
            }
        }
    });

    return result;
}

const getCategories = (filters: any) : string[] => {
    return filters.length && filters[0].values
    ? filters[0].values[0].path_from_root.map(
        (category: any) => category.name
      )
    : [];
}