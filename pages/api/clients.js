const nc = require("next-connect");
import { createClientService, readAllClients } from "./services/client.service.js";

const handler = nc()
    .post(async (req, res) => {
        const body = req.body;
        const response = await createClientService(body)
        res.status(200).json({ message: response });
    })
    .get(async (req, res) => {
        const response = await readAllClients()
        res.status(200).json({ message: response});
    })
    .patch(async (req, res) => {
        res.status(200).json({ message: "Requisição PATCH" });
    })
    .delete(async (req, res) => {
        res.status(200).json({ message: "Requisição DELETE" });
    });

export default handler;
