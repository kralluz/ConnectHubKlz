import React, { createContext, useState, useContext } from "react";
import { api } from "../services/api";
import { useEffect } from "react";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
    const [client, setClient] = useState({});
    const [contacts, setContacts] = useState({});
    const token = typeof window !== 'undefined' ? localStorage.getItem("@CONNECT_HUB_TOKEN") : null;


    useEffect(() => {
        const loadClient = async () => {
            if (token) {
                try {
                    const { data } = await api.get("/session", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setClient(data);
                } catch (error) {
                    toast.error("Erro ao fazer login automático.");
                    navigate("/");
                }
            }
        };
        loadClient();
    }, []);

    const clientRegister = async (formData) => {
        try {
            await api.post("/client", formData);
            toast.success("Cadastro Feito com sucesso!");
            navigate("/");
        } catch (error) {
            toast.error("Erro ao fazer cadastro.");
            console.log(error);
        }
    };

    const clientLogin = async (formData) => {
        await api.post("/session", formData).then((response) => {
            const token = response.data.token;
            const clientId = response.data.client.id;
            localStorage.setItem("@TOKEN", token);
            localStorage.setItem("@CLIENT_ID", clientId);
            const clientData = response.data.client;
            setClient(clientData);
        });
        toast.success("Login feito com sucesso!");
        navigate("/dashboard");
    };

    const clientLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@CLIENT_ID");
        setClient({});
        navigate("/");
    };

    return (
        <ClientContext.Provider
            value={{
                client,
                clientRegister,
                clientLogin,
                clientLogout,
            }}
        >
            {children}
        </ClientContext.Provider>
    );
};

export const useClientContext = () => useContext(ClientContext);
