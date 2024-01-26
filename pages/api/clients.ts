import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ClientService } from "./src/services/client.service";
import { ClientController } from "./src/controllers/client.controller";

const router = createRouter();

router.post(ClientController.createClient);

router.get(ClientController.readAllClients);

export default router.handler();
