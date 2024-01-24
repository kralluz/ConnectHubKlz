import nc from "next-connect";
import {
    getClientById,
    updateClient,
    deleteClient,
} from "../services/client.service.js";

const handler = nc()
    .get(async (req, res) => {
        const {
            query: { id },
        } = req;

        const response = await getClientById(id);
        res.status(200).json({ message: response });
    })
    .patch(async (req, res) => {
        const {
            query: { id: patchId },
            body,
        } = req;
        const response = await updateClient(patchId, body);
        res.status(200).json({ message: response });
    })
    .delete(async (req, res) => {
        const {
            query: { id: deleteId },
        } = req;
        const response = await deleteClient(deleteId);
        res.status(200).json({ message: response });
    });

export default handler;
