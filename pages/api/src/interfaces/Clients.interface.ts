import { z } from "zod";
import {
    clientCreateSchema,
    clientResponseSchema,
    clientUpdateSchema,
    clientSessionSchema,
    clientReadAllSchema,
} from "../schemas/client.schema";

export type ClientResponse = z.infer<typeof clientResponseSchema>;
export type ClientCreate = z.infer<typeof clientCreateSchema>;
export type ClientReadResponse = z.infer<typeof clientReadAllSchema>;
export type ClientUpdate = z.infer<typeof clientUpdateSchema>;
export type ClientSession = z.infer<typeof clientSessionSchema>;

export type SessionReturn = { token: string };
