import { useState, useEffect } from "react";
import { api } from "../src/services/api";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserFromLocalStorage = () => {
            try {
                const token = localStorage.getItem("@CONNECT_HUB_TOKEN");
                if (token) {
                    const decodedToken = JSON.parse(atob(token.split(".")[1]));
                    const { clientId } = decodedToken;
                    const client = api.get("/clients/" + clientId);
                    setUser(client);
                }
            } catch (error) {
                console.error("Erro ao obter usuário do localStorage:", error);
            } finally {
                setLoading(false);
            }
        };

        getUserFromLocalStorage();
    }, []);

    return { user, loading };
};

export default useUser;
