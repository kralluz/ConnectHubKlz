import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useRouter } from "next/router";

export const useClientState = () => {
    const router = useRouter();
    const [client, setClient] = useState({});
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState();
    
    useEffect(() => {
        const token = localStorage.getItem("@CONNECT_HUB_TOKEN")
        const loadClient = async () => {
            if (token) {
                try {
                    const decodedToken = JSON.parse(atob(token.split(".")[1]));
                    const { clientId } = decodedToken;
                    const client = api.get("/clients/" + clientId);
                    setClient(client);
                } catch (error) {
                    alert("Erro ao fazer login automático.");
                    router.push("/session");
                }
            }
        };
        loadClient();
    }, []);

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
        client,
        setClient,
        loading,
        setLoading,
        contacts,
        setContacts,
        clientRegister,
        clientLogin,
        clientLogout,
    };
};
