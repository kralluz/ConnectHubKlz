import { z } from "zod";
import {
    clientCreateSchema,
    clientResponseSchema,
    clientUpdateSchema,
    clientSessionSchema,
} from "../schemas/client.schema";

export type ClientResponse = z.infer<typeof clientResponseSchema>;
export type ClientCreate = z.infer<typeof clientCreateSchema>;
export type ClientReadResponse = ClientResponse[];
export type ClientUpdate = z.infer<typeof clientUpdateSchema>;
export type ClientSession = z.infer<typeof clientSessionSchema>;

export type SessionReturn = { token: string }