import { PrismaClient } from "../../../../prisma/src/generated/client";
import {
    ClientResponse,
    ClientCreate,
    ClientReadResponse,
    ClientUpdate,
} from "../interfaces/Clients.interface";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const createClientService = async (
    body: ClientCreate
): Promise<ClientResponse> => {
    const hashedPassword = body.password
        ? await bcrypt.hash(body.password, 10)
        : undefined;

    const createdClient = await prisma.client.create({
        data: {
            name: body.name,
            email: body.email,
            password: hashedPassword,
            phone: body.phone,
        },
    });

    const client = await prisma.client.findUnique({
        where: { id: createdClient.id },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            created_at: true,
            updated_at: true,
        },
    });

    await prisma.$disconnect();
    return client;
};

export const readAllClients = async (): Promise<ClientReadResponse> => {
    const clients = await prisma.client.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            created_at: true,
            updated_at: true,
        },
    });

    await prisma.$disconnect();
    return clients;
};

export const getClientById = async (
    id: any
): Promise<ClientResponse | null> => {
    const client = await prisma.client.findUnique({
        where: {
            id: parseInt(id),
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            created_at: true,
            updated_at: true,
        },
    });

    await prisma.$disconnect();
    return client;
};

export const updateClient = async (
    id: any,
    body: ClientUpdate
): Promise<ClientResponse> => {
    const hashedPassword = body.password
        ? await bcrypt.hash(body.password, 10)
        : undefined;

    const updatedClient = await prisma.client.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...body,
            password: hashedPassword,
        },
    });

    const{ password, ...updatedClientWithoutPassword } = updatedClient;

    await prisma.$disconnect();
    return updatedClientWithoutPassword;
};

export const deleteClient = async (id: any): Promise<void> => {
    await prisma.client.delete({
        where: {
            id: parseInt(id),
        },
    });

    await prisma.$disconnect();
};
