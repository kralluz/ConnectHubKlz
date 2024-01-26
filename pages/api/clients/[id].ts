import { createRouter } from "next-connect";
import { ClientController } from "../src/controllers/client.controller";

const router = createRouter();

router.get(ClientController.getClientById);

router.patch(ClientController.updateClient);

router.delete(ClientController.deleteClient);

export default router.handler();
