import sessionService from "./src/services/session.service.js";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;
    const response = await sessionService(body);
    res.status(200).json(response);
});

export default router.handler();
