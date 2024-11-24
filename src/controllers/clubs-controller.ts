import { Response, Request } from "express";
import * as Service from "../services/clubs-service";

export const getClubs = async (request: Request, response: Response) => {
  const responseClub = await Service.getClubService();
  response.status(responseClub.statusCode).json(responseClub.body);
};