import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import {
    createClientService,
    readAllClients,
} from "./src/services/client.service";
import { createClientController } from "./src/controllers/client.controller";

interface ClientRequestBody {
    name: string;
    email: string;
    password: string;
}

const router = createRouter();

router.post(createClientController);

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await readAllClients();
    res.status(200).json(response);
});

export default router.handler();
