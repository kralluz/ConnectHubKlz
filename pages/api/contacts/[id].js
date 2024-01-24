import nc from "next-connect";
import {
    getContactById,
    updateContact,
    deleteContact,
} from "../services/contact.service.js";

const handler = nc()
    .get(async (req, res) => {
        const {
            query: { id },
        } = req;

        const response = await getContactById(id);
        res.status(200).json({ message: response });
    })
    .patch(async (req, res) => {
        const {
            query: { id: patchId },
            body,
        } = req;
        const response = await updateContact(patchId, body);
        res.status(200).json({ message: response });
    })
    .delete(async (req, res) => {
        const {
            query: { id: deleteId },
        } = req;
        const response = await deleteContact(deleteId);
        res.status(200).json({ message: response });
    });

export default handler;
