import React from "react";

export const Link = ({ to, children }) => {
    return (
        <button onClick={() => (window.location.href = to)}>{children}</button>
    );
};
