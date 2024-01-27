import { createRouter } from "next-connect";
import { ContactController } from "./src/controllers/contact.controller";
import * as middlewares from "./src/middlewares/globals.middleware";
import { contactCreateSchema } from "./src/schemas/contact.schema";

const router = createRouter();

router.post(middlewares.verifyToken, middlewares.bodyValidation(contactCreateSchema), middlewares.numberContactValidate, ContactController.createContact);

router.get(middlewares.verifyToken, ContactController.readAllContacts);

export default router.handler();
