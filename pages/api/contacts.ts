import { createRouter } from "next-connect";
import { extractId } from "./src/services/session.service";
import { NextApiRequest, NextApiResponse } from "next";
import {
    createContact,
    readAllContactsByClient,
} from "./src/services/contact.service";
import { ContactController } from "./src/controllers/contact.controller";

const router = createRouter();

router.post(ContactController.createContact);

router.get(ContactController.readAllContacts);

export default router.handler();
