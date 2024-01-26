import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { extractId } from "../src/services/session.service";
import { ContactController } from "../src/controllers/contact.controller";

const router = createRouter();

router.get(ContactController.getContactById);

router.patch(ContactController.updateContact);

router.delete(ContactController.deleteContact);

export default router.handler();
