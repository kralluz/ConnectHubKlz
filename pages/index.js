import { useEffect, useState } from "react";

export default function Home() {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    fetch('/api/apiTest')
    .then(response => response.json())
    .then(data => setApiData(data.teste))
    .catch(error => console.error('Error fetching data:', error));
}, []);
  return (
    <p>{apiData}</p>
  );
}
