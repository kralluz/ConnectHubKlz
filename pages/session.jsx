import React from "react";
import Link from "../src/components/Link";
import SessionForm from "../src/components/forms/SessionForm";

export const SessionPage = () => {
    return (
        <>
            <h1>Login Page</h1>
            <SessionForm />
            <Link to="/register">
                faça seu cadastro aqui!
            </Link>
        </>
    );
};

export default SessionPage;
