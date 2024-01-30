import { Outlet, Navigate } from "react-router-dom";

export const PublicRoutes = () => {
    const userToken = localStorage.getItem("@TOKEN");
    return userToken ? <Navigate to="/dashboard" /> : <Outlet />;
};
