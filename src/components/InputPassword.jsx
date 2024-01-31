import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const InputPassword = ({ name, label, placeholder, handleChange }) => {
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
                    onChange={handleChange}
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

export default InputPassword;
