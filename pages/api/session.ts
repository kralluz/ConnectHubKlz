import { createRouter } from "next-connect";
import { SessionController } from "./src/controllers/session.controller";
import * as middlewares from "./src/middlewares/globals.middleware";
import { clientSessionSchema } from "./src/schemas/client.schema";

const router = createRouter();

router.post(middlewares.bodyValidation(clientSessionSchema), SessionController);

export default router.handler();
