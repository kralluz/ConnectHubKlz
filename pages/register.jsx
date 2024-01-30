import React from "react";
import { Link } from "./src/components/Link";
import { RegisterForm } from "./src/components/RegisterForm";

export const RegisterPage = () => {
    return (
        <>
            <h1>register Page</h1>
            <RegisterForm />
            <Link to="/session">
                faça login aqui!
            </Link>
        </>
    );
};

export default RegisterPage;
