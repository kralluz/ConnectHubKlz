import { PrismaClient } from "../../../../prisma/src/generated/client";
const prisma = new PrismaClient();
import "dotenv/config";

export const createContact = async (clientId, contact) => {
    const newContact = await prisma.contact.create({
        data: {
            client: {
                connect: { id: clientId },
            },
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        },
    });

    await prisma.$disconnect();
    return newContact;
};

export const readAllContactsByClient = async (clientId) => {
    let contacts;
    contacts = await prisma.contact.findMany({
        where: {
            client_id: clientId,
        },
    });

    await prisma.$disconnect();
    return contacts;
};

export const getContactById = async (clientId, id) => {
    let contact;
    contact = await prisma.contact.findUnique({
        where: {
            client_id: Number(clientId),
            id: Number(id),
        },
    });
    console.log("Usuário encontrado:", contact);
    await prisma.$disconnect();
    return contact;
};

export const updateContact = async (clientId, contactId, body) => {
    let contact;
    contact = await prisma.contact.update({
        where: {
            id: Number(contactId),
            client_id: Number(clientId),
        },
        data: {
            name: body.name,
            email: body.email,
            phone: body.phone,
        },
    });
    console.log("Contato atualizado:", contact);
    await prisma.$disconnect();
    return contact;
};

export const deleteContact = async (clientId, contactId) => {
    let deletedContact;
    deletedContact = await prisma.contact.delete({
        where: {
            id: Number(contactId),
            client_id: Number(clientId),
        },
    });
    console.log("Contato excluído:", deletedContact);
    await prisma.$disconnect();
    return deletedContact;
};
