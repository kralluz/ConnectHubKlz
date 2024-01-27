import "dotenv/config";
import AppError from "../middlewares/errors";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ZodTypeAny } from "zod";
import { PrismaClient } from "../../../../prisma/src/generated/client";
import { extractId } from "../services/session.service";
const prisma = new PrismaClient();

export const bodyValidation =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction): void | any => {
        try {
            req.body = schema.parse(req.body);
            return next();
        } catch (error) {
            res.status(400).json(error.flatten().fieldErrors);
        }
    };

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json("Missing bearer token");
    }

    const token: string = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Token expired" });
            }
            return res.status(401).json({ error: "Invalid token" });
        }

        return next();
    });
};

export const verifyContactId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        query: { contactId },
    } = req;
    const token = req.headers.authorization;
    const clientId = extractId(token);

    let result;
    result = await prisma.contact.findUnique({
        where: {
            client_id: 10,
            id: Number(contactId),
        },
    });

    if (result == null) {
        res.status(404).json({ error: `Id Not Found.` });
    }

    next();
};

export const verifyClientId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {
        query: { id },
    } = req;

    let result;
    result = await prisma.client.findUnique({
        where: {
            id: Number(id),
        },
    });
    if (result == null) {
        res.status(404).json({ error: `Id not found.` });
    }

    next();
};

export const numberContactValidate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { phone } = req.body;

    const existingPhone = await prisma.contact.findFirst({
        where: {
            phone: phone,
        },
    });

    if (existingPhone) {
        res.status(409).json({ error: "Phone already exists." });
    }

    return next();
};

export const numberClientValidate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { phone } = req.body;

    if (!phone) {
        return next();
    }

    const existingPhone = await prisma.client.findFirst({
        where: {
            phone: phone,
        },
    });

    if (existingPhone) {
        res.status(409).json({ error: "Phone already exists." });
    }

    return next();
};

export const emailValidate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.body;

    if (!email) {
        return next();
    }

    const existingEmail = await prisma.client.findUnique({
        where: {
            email: email,
        },
    });

    if (existingEmail) {
        res.status(409).json({ error: "Email already exists." });
    }

    return next();
};

export const validateUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, username, password } = req.body;

    if (!email && !username && !password) {
        throw new AppError("At least one field must be filled", 400);
    }

    return next();
};
