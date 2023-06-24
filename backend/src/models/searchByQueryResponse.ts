import { Author } from "./author"

export interface SearchByQueryResponse {
    author: Author,
    categories: string[],
    items: ItemQuerySearch[]
}
export interface ItemQuerySearch {
    id: string,
    title: string,
    price: {
        currency: string, amount: number, decimales: number
    },
    picture: string,
    condition: string,
    free_shipping: boolean
}