import { createRouter } from "next-connect";
import { ClientController } from "./src/controllers/client.controller";
import * as middlewares from "./src/middlewares/globals.middleware";
import { clientCreateSchema } from "./src/schemas/client.schema";


const router = createRouter();

router.post(middlewares.bodyValidation(clientCreateSchema), middlewares.emailValidate, middlewares.numberClientValidate, ClientController.createClient);

router.get(ClientController.readAllClients);

export default router.handler();
