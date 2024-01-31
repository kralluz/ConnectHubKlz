import { Request, Response } from "express";
import sessionService from "../services/session.service";

export const SessionController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const body = req.body;
    const response = await sessionService(body);
    return res.status(200).json(response);
};
