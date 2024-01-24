import { useEffect, useState } from "react";

export default function Home() {
    const [apiData, setApiData] = useState("");

    useEffect(() => {
        fetch("/api/clients")
            .then((response) => response.json())
            .then((data) => {
                setApiData(data.message);
                console.log(data.message);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
            <h1>Home</h1>
            <ul>
                {apiData.map((client) => (
                    <li key={client.id}>
                        <p>Name: {client.name}</p>
                        <p>Email: {client.email}</p>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </>
    );
}
