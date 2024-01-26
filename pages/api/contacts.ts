import { createRouter } from "next-connect";
import { extractId } from "./src/services/session.service";
import { NextApiRequest, NextApiResponse } from "next";
import {
    createContact,
    readAllContactsByClient,
} from "./src/services/contact.service";

const router = createRouter();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;
    const token = req.headers.authorization;
    const clientId = extractId(token);
    const newContact = await createContact(clientId, body);
    res.status(200).json(newContact);
});

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;
    const clientId = extractId(token);
    const response = await readAllContactsByClient(clientId);
    res.status(200).json(response);
});

export default router.handler();
