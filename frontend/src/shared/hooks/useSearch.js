import { useState } from "react"
import client from "../services/client";

export const useSearch = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const search = async (query) => {
        const { data } = await client.get(`items?q=${query}`);
        setItems(data.items);
        setCategories(data.categories);
        // redirect(`/items?search=${query}`);
    }

    const searchItemDetail = async (id) => {
        const { data } = await client.get(`items/${id}`);
        return data.item;
    }

    return {items, categories, search, searchItemDetail}
}