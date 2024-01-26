import { Request, Response } from "express";
import { ClientResponse, ClientCreate } from "../interfaces/Clients.interface";
import { createClientService } from "../services/client.service";

export const createClientController = async (req: Request, res: Response<ClientResponse>): Promise<Response<ClientResponse>> => {
    const body: ClientCreate = req.body;
    const response = await createClientService(body);
    return res.status(200).json(response);
}