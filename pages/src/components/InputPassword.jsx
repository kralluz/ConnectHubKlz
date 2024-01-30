import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const InputPassword = ({ name, label, placeholder }) => {
    const [IsHidden, setIsHidden] = useState(true);

    return (
        <>
            <div>
                <label htmlFor={name}>{label}</label>
                <input
                    id={name}
                    name={name}
                    type="password"
                    placeholder={placeholder}
                />
                <button type="button" onClick={() => setIsHidden(!IsHidden)}>
                    {IsHidden ? (
                        <MdVisibility color="black" />
                    ) : (
                        <MdVisibilityOff color="black" />
                    )}
                </button>
            </div>
        </>
    );
};
