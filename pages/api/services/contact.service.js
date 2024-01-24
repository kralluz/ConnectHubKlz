import { PrismaClient } from "../../../prisma/src/generated/contact";
const prisma = new PrismaClient();

export const createContactService = async (body) => {
    let contact;
    contact = await prisma.contact.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
        },
    });
    console.log("Usuário criado:", contact);
    await prisma.$disconnect();
    return contact;
};

export const readAllContactsByClient = async (id) => {
    let contacts;
    contacts = await prisma.contact.findMany();
    console.log("Usuários encontrados:", contacts);
    await prisma.$disconnect();
    return contacts;
}

export const getContactById = async (id) => {
    let contact;
    contact = await prisma.contact.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    console.log("Usuário encontrado:", contact);
    await prisma.$disconnect();
    return contact;
}

export const updateContact = async (id, body) => {
    let contact;
    contact = await prisma.contact.update({
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
    console.log("Usuário atualizado:", contact);
    await prisma.$disconnect();
    return contact;
}

export const deleteContact = async (id) => {
    let contact;
    contact = await prisma.contact.delete({
        where: {
            id: parseInt(id),
        },
    });
    console.log("Usuário deletado:", contact);
    await prisma.$disconnect();
    return contact;
}