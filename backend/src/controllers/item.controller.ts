import { Request, Response } from "express";
import { getItemsById, getItemsByQuery } from "../handlers/items";

export const searchItemByQuery = async (request: Request, response: Response): Promise<Response> => {
    try 
    {
        const { q: query } = request.query;

        if(!query){
            return response.status(400).json({message: 'Campos requeridos: query'});
        }

        const items = await getItemsByQuery(query);
        return response.status(200).json(items);
    } catch (error: any) {
        console.log(error)
        return response.status(500).json(error);
    }
}

export const searchItemById = async (request: Request, response: Response): Promise<Response> => {
    try 
    {
        const id = request.params.id;

        if(!id) {
            return response.status(400).json({message: 'Campos requeridos: id'});
        }

        const items = await getItemsById(id);
        return response.status(200).json(items);
    } catch (error: any) {
        return response.status(500).json(error);
    }
}