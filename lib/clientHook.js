import { useState, useEffect } from "react";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserFromLocalStorage = () => {
            try {
                const getUserFromLocalStorages = () => {
                    const token = null

                    const decodedToken = JSON.parse(atob(token.split(".")[1]));
                    const {clientId, name, email} = decodedToken;
                    const client = {clientId, name, email}
                    return client;
                };
                getUserFromLocalStorages();
                setUser(getUserFromLocalStorages());
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
