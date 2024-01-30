import "../styles/global.css";
import { ClientProvider } from "./src/providers/index";

export default function App({ Component, pageProps }) {
    return (
        <>
            <ClientProvider>
                <Component {...pageProps} />
            </ClientProvider>
        </>
    );
}
