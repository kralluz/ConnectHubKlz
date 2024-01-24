import { PrismaClient } from "../../../prisma/src/generated/client";
const prisma = new PrismaClient();

export const createClientService = async (body) => {
    let client;
    client = await prisma.client.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
        },
    });
    console.log("Usuário criado:", client);
    await prisma.$disconnect();
    return client;
};

export const readAllClients = async () => {
    let clients;
    clients = await prisma.client.findMany();
    console.log("Usuários encontrados:", clients);
    await prisma.$disconnect();
    return clients;
}

export const getClientById = async (id) => {
    let client;
    client = await prisma.client.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    console.log("Usuário encontrado:", client);
    await prisma.$disconnect();
    return client;
}

export const updateClient = async (id, body) => {
    let client;
    client = await prisma.client.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
        },
    });
    console.log("Usuário atualizado:", client);
    await prisma.$disconnect();
    return client;
}

export const deleteClient = async (id) => {
    let client;
    client = await prisma.client.delete({
        where: {
            id: parseInt(id),
        },
    });
    console.log("Usuário deletado:", client);
    await prisma.$disconnect();
    return client;
}