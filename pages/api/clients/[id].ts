import { createRouter } from "next-connect";
import { ClientController } from "../src/controllers/client.controller";
import * as middlewares from "../src/middlewares/globals.middleware";
import { clientUpdateSchema } from "../src/schemas/client.schema";

const router = createRouter();

router.get(middlewares.verifyClientId, ClientController.getClientById);

router.patch(
    middlewares.verifyClientId,
    middlewares.bodyValidation(clientUpdateSchema),
    middlewares.numberClientValidate,
    ClientController.updateClient
);

router.delete(middlewares.verifyClientId, ClientController.deleteClient);

export default router.handler();
