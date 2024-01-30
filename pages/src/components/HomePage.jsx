import { useState, useEffect } from "react";
import { api } from "../services/api";
import { HeaderComponent } from "./header";
import { Link } from "./Link";

export const HomePage = () => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await api.get("/clients");
            setApiData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <HeaderComponent />
            <h1>Clientes</h1>
            <h3>HomePage</h3>
            <ul>
                {apiData.map((client) => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
            <Link to="/about">About</Link>
        </>
    );
};
