import { useState } from "react"
import { useNavigate } from "react-router-dom";
import client from "../services/client";

export const useSearch = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const search = async (query) => {
        const { data } = await client.get(`items?q=${query}`);
        setItems(data.items);
        setCategories(data.categories);
        navigate(`/items?search=${query}`);
    }

    return {items, categories, search}
}