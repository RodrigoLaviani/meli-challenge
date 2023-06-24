import axios from 'axios';

export const searchItemByQuery = async (query: string): Promise<any> => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchItemById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchItemByIdWithDescription = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
