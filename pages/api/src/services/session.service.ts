import "dotenv/config";
import AppError from "../middlewares/errors";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { LoginReturn, UserLogin } from "../interfaces/Clients.interface";
import { PrismaClient } from "../../../../prisma/src/generated/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";



export const extractId = (authorizationHeader) => {
    if (!authorizationHeader) {
        return null;
    }

    const parts = authorizationHeader.split(" ");

    if (parts.length === 2 && parts[0].toLowerCase() === "bearer") {
        const token = parts[1];
        const secret_key = process.env.JWT_SECRET_KEY;
        const decodedToken = jwt.verify(token, secret_key);
        decodedToken.clientId;
        return decodedToken.clientId;
    }

    return null;
};


const sessionService = async (data: UserLogin): Promise<LoginReturn> => {
    const { email } = data;
    const user = await prisma.client.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) throw new AppError("Invalid credentials", 401);

    const comparePass = await compare(data.password, user.password);

    if (!comparePass) throw new AppError("Invalid credentials", 401);

    const token: string = sign({ clientId: user.id, email: user.email }, process.env.JWT_SECRET_KEY!, {
        subject: user.id.toString(),
        expiresIn: process.env.EXPIRES_IN!,
    });

    return { token };
};


export default sessionService