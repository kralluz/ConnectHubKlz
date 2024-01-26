import { createRouter } from "next-connect";
import { ContactController } from "./src/controllers/contact.controller";

const router = createRouter();

router.post(ContactController.createContact);

router.get(ContactController.readAllContacts);

export default router.handler();
