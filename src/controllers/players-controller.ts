import { Response, Request } from "express";
import * as Service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (request: Request, response: Response) =>{

    const httpResponse = await Service.getPlayerService();    
    
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await Service.getPlayerByIdService(id);
    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (request: Request, response: Response) => {
    const bodyValue = request.body;
    const httpResponse = await Service.createPlayerService(bodyValue);

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body);
    }      
};

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await Service.deletePlayerService(id);

    response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const bodyValue: StatisticsModel = request.body;
    const httpResponse = await Service.updatePlayerService(id, bodyValue);
    response.status(httpResponse.statusCode).json(httpResponse.body);
};
