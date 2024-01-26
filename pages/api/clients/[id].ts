import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import {
    getClientById,
    updateClient,
    deleteClient,
} from "../src/services/client.service";
import {ClientResponse} from "../src/interfaces/Clients.interface";


const router = createRouter();

router.get(async (req: NextApiRequest, res: NextApiResponse): Promise<ClientResponse> => {
    const {
        query: { id },
    } = req;

    const response: ClientResponse = await getClientById(id);
    res.status(200).json(response);
    return response;
});

router.patch(async (req: NextApiRequest, res: NextApiResponse): Promise<ClientResponse> => {
    const {
        query: { id: patchId },
        body,
    } = req;

    const response: ClientResponse = await updateClient(patchId, body);
    res.status(200).json(response);
    return response;
});

router.delete(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const {
        query: { id: deleteId },
    } = req;

    await deleteClient(deleteId);
    res.status(204);
});

export default router.handler();
