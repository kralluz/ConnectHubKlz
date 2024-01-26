import { z } from "zod";
import {
    contactCreateSchema,
    contactResponseSchema,
    contactUpdateSchema,
} from "../schemas/contact.schema";

export type ContactResponse = z.infer<typeof contactResponseSchema>;
export type ContactCreate = z.infer<typeof contactCreateSchema>;
export type ContactReadResponse = ContactResponse[];
export type ContactUpdate = z.infer<typeof contactUpdateSchema>;

export type SessionReturn = { token: string }