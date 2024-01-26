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
            <h1>Homae</h1>

        </>
    );
}
