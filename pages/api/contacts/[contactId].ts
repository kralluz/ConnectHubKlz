import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { extractId } from "../src/services/session.service.js";
import {
    getContactById,
    updateContact,
    deleteContact,
} from "../src/services/contact.service.js";
import {ContactResponse} from "../src/interfaces/Contacts.interface"

const router = createRouter();

router.get(async (req: NextApiRequest, res: NextApiResponse): ContactResponse => {
    const {
        query: { contactId },
    } = req;
    const token = req.headers.authorization;
    const clientId = extractId(token);
    const response = await getContactById(clientId, contactId);
    res.status(200).json({ message: response });
});

router.patch(async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { contactId },
        body,
    } = req;
    const token = req.headers.authorization;
    const clientId = extractId(token);
    const response = await updateContact(clientId, contactId, body);
    res.status(200).json({ message: response });
});

router.delete(async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { contactId },
    } = req;
    const token = req.headers.authorization;
    const clientId = extractId(token);
    const response = await deleteContact(clientId, contactId);
    res.status(200).json({ message: response });
});

export default router.handler();
