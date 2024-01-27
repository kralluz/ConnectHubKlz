import { createRouter } from "next-connect";
import { ContactController } from "../src/controllers/contact.controller";
import * as middlewares from "../src/middlewares/globals.middleware";


const router = createRouter();

router.get(middlewares.verifyToken, middlewares.verifyContactId, ContactController.getContactById);

router.patch(middlewares.verifyToken, ContactController.updateContact);

router.delete(middlewares.verifyToken, ContactController.deleteContact);

export default router.handler();
