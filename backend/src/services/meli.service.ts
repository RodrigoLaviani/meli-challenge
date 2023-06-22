export const searchItemByQuery = async (query: any) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?${query}`);
    const body = await response.json();
    return body;
}

export const searchItemById = async (id: string) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const body = await response.json();
    return body;
}

export const searchItemByIdWithDescription = async (id: string) => {
    const response = await fetch(`https://api.mercadolibre.com/items/:${id}/description`);
    const body = await response.json();
    return body;
}