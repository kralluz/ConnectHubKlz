import React from "react";
import { Link } from "./src/components/Link";

export const SessionPage = () => {
    return (
        <>
            <h1>Login Page</h1>
            <Link to="/register">
                faça seu cadastro aqui!
            </Link>
        </>
    );
};

export default SessionPage;
