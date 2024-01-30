import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useClient from "../lib/clientHook";
import { HomePage } from "./src/components/HomePage";

export default function MyApp() {
    const { user, loading } = useClient();
    const router = useRouter();

    useEffect(() => {
        if (!(user || loading)) {
            router.push("/session");
        }
    }, [user, loading]);

    return (
        <>
            <HomePage />
        </>
    );
}
