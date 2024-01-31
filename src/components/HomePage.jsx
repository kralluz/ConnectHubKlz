import { useEffect } from "react";
import { useClientState } from "../providers/client.provider";
import { useContactsState } from "../providers/contacts.provider";

const HomePage = () => {
    const { clientLogout } = useClientState();
    const { contacts,  readAllContacts } = useContactsState();
    const token =
        typeof window !== "undefined"
            ? localStorage.getItem("@CONNECT_HUB_TOKEN")
            : null;

    const onSubmit = async () => {
        clientLogout();
    };

    useEffect(() => {
        if (token) {
            readAllContacts();
        }
    }, [token]);
    return (
        <>
            <h3>HomePage</h3>
            <h1>Contatos</h1>
            {contacts
                ? contacts.map((contact) => {
                    return (
                        <div key={contact.id}>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                    );
                })
                : "Carregando..."}
            <form onSubmit={onSubmit}>
                <button type="submit">sair da sessão</button>
            </form>
        </>
    );
};

export default HomePage;
