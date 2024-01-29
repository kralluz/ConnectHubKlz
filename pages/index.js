import { useState, useEffect } from "react";
import { api } from "./src/services/api.jsx";
import { HeaderComponent } from "./src/components/header";
import Link from "next/link";

export default function MyApp() {
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
            <h3>Main page</h3>
            <ul>
                {apiData.map((client) => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
            <button>
                <Link href="/about">Blog Post</Link>
            </button>
        </>
    );
}
