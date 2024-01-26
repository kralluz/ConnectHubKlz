import { Request, Response, NextFunction } from "express";
import { createRouter } from "next-connect";
import { SessionController } from "./src/controllers/session.controller";

const router = createRouter();

export const teste = async (
    req: Request,
    res: Response, 
    next: NextFunction
): Promise<Response | void> => {
    if (1 > 2) {
        return res.status(202).json("response");
    }

    return next();
};

router.post( teste, SessionController);

export default router.handler();
