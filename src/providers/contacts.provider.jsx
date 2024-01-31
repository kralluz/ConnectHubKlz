import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useRouter } from "next/router";

export const useContactsState = () => {
    const [contacts, setContacts] = useState([]);
    const router = useRouter();
    const token =
            typeof window !== "undefined"
                ? localStorage.getItem("@CONNECT_HUB_TOKEN")
                : null;


    const readAllContacts = async () => {
        try {
            const response = await api.get("/contacts");
            setContacts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const clientRegister = async (formData) => {
        try {
            const response = await api.post("/clients", formData);
            if(response.status === 200) {
                console.log("Requisição POST bem-sucedida!");
                router.push("/session");
                ;
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const clientLogin = async (formData) => {
        try {
            await api.post("/session", formData).then((response) => {
                const token = response.data.token;
                localStorage.setItem("@CONNECT_HUB_TOKEN", token);
                const clientData = response.data.client;
                setClient(clientData);
                router.push("/");
            });
        } catch (error) {
            console.log("🚀 ~ clientLogin ~ error:", error)
        }
    };

    const clientLogout = () => {
        router.push("/session");
        localStorage.removeItem("@CONNECT_HUB_TOKEN");
        setClient({});
        setContacts();
    };

    return {
        contacts,
        setContacts,
        readAllContacts,
    };
};
